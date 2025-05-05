import React, { useState } from "react";
import "./Projects.css";

// Import images
import project1Image1 from "../../assets/p11.png";
import project1Image2 from "../../assets/p12.png";
import project1Image3 from "../../assets/p13.png";
import project2Image1 from "../../assets/p21.png";
import project2Image2 from "../../assets/p22.png";
import project2Image3 from "../../assets/p23.png";
import project3Image1 from "../../assets/p31.png";
import project3Image2 from "../../assets/p32.png";
import project3Image3 from "../../assets/p33.png";
import project4Image1 from "../../assets/p41.png";
import project4Image2 from "../../assets/p42.png";
import project4Image3 from "../../assets/p43.png";
import project5Image1 from "../../assets/p51.png";
import project5Image2 from "../../assets/p52.png";
import project5Image3 from "../../assets/p53.png";
import project6Image1 from "../../assets/p61.png";
import project6Image2 from "../../assets/p62.png";
import project6Image3 from "../../assets/p63.png";
import project7Image1 from "../../assets/p71.png";
import project7Image2 from "../../assets/p72.png";
import project7Image3 from "../../assets/p73.png";
import project8Image1 from "../../assets/p81.png";
import project8Image2 from "../../assets/p82.png";
import project8Image3 from "../../assets/p83.png";

const projectsData = [
  {
    name: "X-ONE VISION",
    description:
      "X-One.Vision is a leading UK-based business card company dedicated to providing high-quality printing solutions for professionals and businesses alike. As a proud contributor to their full-stack website, I played a key role in enhancing the user experience by implementing essential features such as Stripe checkout and cart functionalities, along with custom email logic.",
    images: [project1Image1, project1Image2, project1Image3],
    liveLink: "https://x-one.vision/",
  },
  {
    name: "Siege Builders - Clash of Clans Portfolio Site",
    description:
      "For the gaming company Siege Builders, I crafted a sleek portfolio website seamlessly aligned with the theme of their flagship game, Clash of Clans. The design encapsulates the essence of the game, creating a visually immersive experience for visitors. This concise and dynamic website serves as a perfect showcase for Siege Builders' gaming prowess.",
    images: [project2Image1, project2Image2, project2Image3],
    liveLink: "https://dancing-babka-f6e2a6.netlify.app/",
  },
  {
    name: "HPVS Cargo logistic website",
    description:
      "HPVS Cargo, a leading logistics company, required a website that would effectively communicate their services to potential clients. In response, we crafted a dynamic and visually appealing website that showcases HPVS Cargo's services and expertise. The website features a user-friendly design, making it easy for visitors to navigate and learn more about HPVS Cargo's offerings.",
    images: [project3Image1, project3Image2, project3Image3],
    liveLink: "https://hpvs.vercel.app/",
  },
  {
    name: "TravBros",
    description:
      "TravBros is your one-stop destination for all things travel! Whether you're planning a weekend getaway, a once-in-a-lifetime adventure, or just dreaming about your next trip, TravBros makes it easy and exciting to explore the world. With a sleek, user-friendly interface, TravBros offers personalized travel itineraries, exclusive deals on flights and accommodations, and insider tips from seasoned travelers.",
    images: [project4Image1, project4Image2, project4Image3],
    liveLink: "https://travbros-6ucsenebw-hashir-sajids-projects.vercel.app/",
  },
  {
    name: "R&B TEAUSA",
    description:
      "RBteausa, a renowned tea company with over 1500 franchises across the globe , approached us with a unique challenge Their existing website lacked essential features for updating menus, adding new locations to the map, and establishing effective communication channels between the admin and franchises. In response, we crafted a comprehensive web application with a host of user-friendly features.",
    images: [project5Image1, project5Image2, project5Image3],
    liveLink: "https://rbteausa.com/",
  },
  {
    name: "Dental Strivers LMS",
    description:
      "Dental Strivers is a leading dental education company that offers online courses for dental professionals. In response to their need for a comprehensive learning management system (LMS), we developed a dynamic and user-friendly platform that enables students to access course materials, complete assignments, and track their progress. The LMS features a sleek and intuitive design, making it easy for students to navigate and engage with course content.",
    images: [project6Image1, project6Image2, project6Image3],
    liveLink: "https://dentalstrivers.ca/",
  },
  {
    name: "Crown Palace",
    description:
      "Crown Palace is an exquisite online portal for luxury and comfort, offering a selection of the finest hotels for travelers seeking elegance, exceptional service, and a memorable experience. Whether you’re planning a romantic getaway, a business trip, or a family vacation, Crown Palace provides access to a curated collection of world-class hotels equipped with state-of-the-art amenities, spacious rooms, and impeccable hospitality.",
    images: [project7Image1, project7Image2, project7Image3],
    liveLink:
      "https://hotel-site-using-html-h2460zc61-hashir-sajids-projects.vercel.app/",
  },
  {
    name: "The Fit Club",
    description:
      "The Fit Club is a vibrant and dynamic online fitness destination designed to help individuals of all fitness levels achieve their health and wellness goals. The website offers a range of personalized workout plans, expert nutrition advice, and access to a community of like-minded individuals who are committed to living a healthier lifestyle.",
    images: [project8Image1, project8Image2, project8Image3],
    liveLink: "https://fit-club-76vnnubl4-hashir-sajids-projects.vercel.app/",
  },
];

const Projects = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState({});

  const handleImageChange = (index, direction) => {
    setCurrentImageIndex((prevState) => {
      const newState = { ...prevState };
      const totalImages = projectsData[index].images.length;
      const currentIndex = prevState[index] || 0;
      newState[index] = (currentIndex + direction + totalImages) % totalImages;
      return newState;
    });
  };

  return (
    <div className="projects-container">
      <h1 className="projects-heading">PROJECTS</h1>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="image-container">
              <img
                src={project.images[currentImageIndex[index] || 0]}
                alt={project.name}
                className="project-image"
              />
              <div className="image-slider-buttons">
                <button
                  className="slider-button left"
                  onClick={() => handleImageChange(index, -1)}
                >
                  &lt; {/* Corrected to HTML entity for left arrow */}
                </button>
                <button
                  className="slider-button right"
                  onClick={() => handleImageChange(index, 1)}
                >
                  &gt; {/* Corrected to HTML entity for right arrow */}
                </button>
              </div>
            </div>
            <h3 className="project-name">{project.name}</h3>
            <p className="project-description">{project.description}</p>
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="live-button"
            >
              Go Live
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;