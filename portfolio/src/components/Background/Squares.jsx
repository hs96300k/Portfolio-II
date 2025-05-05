import { useRef, useEffect } from 'react';
import './Squares.css';

const Squares = ({
  direction = 'up',
  speed = 0.2,
  borderColor = '#111111',
  squareSize = 40,
  className = ''
}) => {
  const canvasRef = useRef(null);
  const requestRef = useRef(null);
  const numSquaresX = useRef();
  const numSquaresY = useRef();
  const gridOffset = useRef({ x: 0, y: 0 });
  const mousePos = useRef({ x: null, y: null });
  const hoveredSquare = useRef({ x: null, y: null });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      numSquaresX.current = Math.ceil(canvas.width / squareSize) + 1;
      numSquaresY.current = Math.ceil(canvas.height / squareSize) + 1;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#060606';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const startX = Math.floor(gridOffset.current.x / squareSize) * squareSize;
      const startY = Math.floor(gridOffset.current.y / squareSize) * squareSize;

      for (let x = startX; x < canvas.width + squareSize; x += squareSize) {
        for (let y = startY; y < canvas.height + squareSize; y += squareSize) {
          const squareX = x - (gridOffset.current.x % squareSize);
          const squareY = y - (gridOffset.current.y % squareSize);

          const isHovered =
            mousePos.current.x !== null &&
            mousePos.current.y !== null &&
            Math.floor((mousePos.current.x - squareX) / squareSize) === 0 &&
            Math.floor((mousePos.current.y - squareY) / squareSize) === 0;

          if (isHovered) {
            hoveredSquare.current = { x: squareX, y: squareY };
            // Highlight hovered square with a glow and slight scale
            ctx.fillStyle = 'rgba(0, 255, 204, 0.3)';
            ctx.fillRect(squareX, squareY, squareSize, squareSize);
            ctx.strokeStyle = '#00ffcc';
            ctx.lineWidth = 2;
            ctx.strokeRect(squareX, squareY, squareSize, squareSize);
          } else {
            ctx.strokeStyle = borderColor;
            ctx.lineWidth = 1;
            ctx.strokeRect(squareX, squareY, squareSize, squareSize);
          }
        }
      }

      if (mousePos.current.x !== null && mousePos.current.y !== null) {
        const gradient = ctx.createRadialGradient(
          mousePos.current.x,
          mousePos.current.y,
          0,
          mousePos.current.x,
          mousePos.current.y,
          40
        );
        gradient.addColorStop(0, 'rgba(120, 120, 120, 0.5)');
        gradient.addColorStop(0.4, 'rgba(120, 120, 120, 0.15)');
        gradient.addColorStop(1, 'rgba(120, 120, 120, 0)');

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
    };

    const updateAnimation = () => {
      const effectiveSpeed = Math.max(speed, 0.1);
      switch (direction) {
        case 'right':
          gridOffset.current.x = (gridOffset.current.x - effectiveSpeed + squareSize) % squareSize;
          break;
        case 'left':
          gridOffset.current.x = (gridOffset.current.x + effectiveSpeed + squareSize) % squareSize;
          break;
        case 'up':
          gridOffset.current.y = (gridOffset.current.y + effectiveSpeed + squareSize) % squareSize;
          break;
        case 'down':
          gridOffset.current.y = (gridOffset.current.y - effectiveSpeed + squareSize) % squareSize;
          break;
        case 'diagonal':
          gridOffset.current.x = (gridOffset.current.x - effectiveSpeed + squareSize) % squareSize;
          gridOffset.current.y = (gridOffset.current.y - effectiveSpeed + squareSize) % squareSize;
          break;
        default:
          break;
      }

      drawGrid();
      requestRef.current = requestAnimationFrame(updateAnimation);
    };

    const handleMouseMove = (event) => {
      const rect = canvas.getBoundingClientRect();
      mousePos.current = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
      };
    };

    const handleMouseLeave = () => {
      mousePos.current = { x: null, y: null };
      hoveredSquare.current = { x: null, y: null };
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    requestRef.current = requestAnimationFrame(updateAnimation);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(requestRef.current);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [direction, speed, borderColor, squareSize]);

  return <canvas ref={canvasRef} className={`squares-canvas ${className}`}></canvas>;
};

export default Squares;