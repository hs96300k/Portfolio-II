import './Education.css';

export default function Education() {
  return (
    <div className="education-container">
      <div className="education-content">
        <h1 className="education-heading">Education</h1>
        <div className="education-cards">
          <div className="education-card">
            <h2>College</h2>
            <h3>Aspire College Chunian</h3>
            <span>2020 - 2022</span>
            <p>
              I completed my intermediate education in Computer Science at Aspire College Chunian campus. This program gave me a solid foundation in key computer science concepts and equipped me with the skills and knowledge needed to pursue further studies in the field.
            </p>
          </div>
          <div className="education-card">
            <h2>University</h2>
            <h3>University of Okara</h3>
            <span>2022 - 2026</span>
            <p>
              I am currently pursuing my Bachelor's degree in Information Technology at the University of Okara. This program is deepening my understanding of various IT concepts and providing me with the skills needed to excel in the ever-evolving technology landscape.
            </p>
          </div>
        </div>
      </div>
      {/* Add your image here on the right side, e.g., <img src="path/to/image.jpg" className="education-image" /> */}
    </div>
  );
}