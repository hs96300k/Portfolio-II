import { useState } from "react";
import DecryptedText from './DecryptedText';
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';
import ShinyText from './ShinyText';
import Lanyard from './Lanyard';
import './Home.css';

const Home = () => {
  const sentences = [
    "Transforming Challenges into Opportunities",
    "Bringing Ideas to Life Through Code",
    "A Full Stack Web Developer",
    "Transforming Ideas into Code"
  ];

  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);

  const handleAnimationComplete = () => {
    setTimeout(() => {
      setCurrentSentenceIndex((prev) => (prev + 1) % sentences.length);
    }, 1000);
  };

  return (
    <div className="home-container">
      <div className="content-left">
        <h1>Hi, I am Hashir Sajid</h1>
        <div className="decrypted-text">
          <DecryptedText
            text={sentences[currentSentenceIndex]}
            speed={100}
            maxIterations={30}
            animateOn="view"
            revealDirection="center"
            className="revealed"
            onAnimationComplete={handleAnimationComplete}
          />
        </div>
        <p className="home-paragraph">
          Versatile and reliable web developer skilled in tackling challenges, crafting clean, production-ready code, and thriving in dynamic, high-pressure environments. I bring hands-on experience with React.js for front-end development and expertise in Node.js, Express.js, and MongoDB for back-end solutions.
        </p>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/hashirsajid/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} color="#0077B5" />
          </a>
          <a href="https://github.com/hs96300k" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} color="#ffffff" />
          </a>
          <a href="https://api.whatsapp.com/send/?phone=923704353050&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp size={30} color="#25D366" />
          </a>
        </div>
        <a href="/cv.pdf" download>
          <ShinyText text="Download CV" speed={3} className="cv-button" />
        </a>
      </div>
      <div className="content-right">
        <Lanyard position={[0, 0, 5]} gravity={[0, -40, 0]} />
      </div>
    </div>
  );
};

export default Home;