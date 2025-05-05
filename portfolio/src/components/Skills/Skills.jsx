import React, { useEffect, useRef } from 'react';
import './Skills.css';
import { gsap } from 'gsap';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaFigma, FaGitAlt, FaDocker, FaLinux,
} from 'react-icons/fa';
import {
  SiTailwindcss, SiTypescript, SiNextdotjs, SiMongodb, SiMysql,
  SiExpress, SiVercel, SiStripe,
} from 'react-icons/si';

const Skills = () => {
  const rowRefs = useRef([]);

  const skillItems = [
    { icon: <FaHtml5 />, name: 'HTML5' },
    { icon: <FaCss3Alt />, name: 'CSS3' },
    { icon: <SiTailwindcss />, name: 'Tailwind' },
    { icon: <FaJs />, name: 'JavaScript' },
    { icon: <SiTypescript />, name: 'TypeScript' },
    { icon: <FaReact />, name: 'React' },
    { icon: <FaReact />, name: 'React Native' },
    { icon: <SiNextdotjs />, name: 'Next.js' },
    { icon: <SiMongodb />, name: 'MongoDB' },
    { icon: <SiMysql />, name: 'MySQL' },
    { icon: <SiExpress />, name: 'Express' },
    { icon: <FaNodeJs />, name: 'Node.js' },
    { icon: <FaFigma />, name: 'Figma' },
    { icon: <FaGitAlt />, name: 'Git' },
    { icon: <SiVercel />, name: 'Vercel' },
    { icon: <FaDocker />, name: 'Docker' },
    { icon: <SiStripe />, name: 'Stripe' },
    { icon: <FaLinux />, name: 'Linux' },
  ];

  while (skillItems.length < 28) {
    skillItems.push({});
  }

  const gridItems = skillItems.map((skill, index) => (
    <div className="skill-item" key={index}>
      {skill.icon && <div className="skill-icon">{skill.icon}</div>}
      {skill.name && <span className="skill-name">{skill.name}</span>}
    </div>
  ));

  useEffect(() => {
    gsap.ticker.lagSmoothing(0);
  
    const directions = [1, -1, 1, -1]; // alternate directions per row
    const speeds = [20, 15, 10, 5]; // different speeds per row
  
    rowRefs.current.forEach((row, i) => {
      if (row) {
        gsap.to(row, {
          x: directions[i] * 200,
          repeat: -1,
          yoyo: true,
          ease: 'linear',
          duration: speeds[i],
        });
      }
    });
  }, []);
  

  return (
    <section className="skills-section">
      <h2 className="skills-heading">Skills</h2>
      <div className="noscroll">
        <section
          className="intro"
          style={{
            background: `radial-gradient(circle, black 0%, transparent 100%)`,
          }}
        >
          <div className="gridMotion-container">
            {[...Array(4)].map((_, rowIndex) => (
              <div
                key={rowIndex}
                className="row"
                ref={(el) => (rowRefs.current[rowIndex] = el)}
              >
                {[...Array(7)].map((_, itemIndex) => {
                  const item = gridItems[rowIndex * 7 + itemIndex];
                  return (
                    <div key={itemIndex} className="row__item">
                      <div className="row__item-inner">
                        <div className="row__item-content">{item}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
          <div className="fullview"></div>
        </section>
      </div>
    </section>
  );
};

export default Skills;
