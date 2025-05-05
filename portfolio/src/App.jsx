import React from "react";
import Squares from "./components/Background/Squares";
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./components/Home/Home";
import About from "./components/About/About.jsx"
import Skills from "./components/Skills/Skills.jsx";
import Education from "./components/Education/Education.jsx"
import Projects from "./components/Projects/Projects.jsx";

const App = () => {
  return (
    <>
      <Squares />
      <Navbar />
      <Home />
      {/* <About/> */}
      <Skills/>
      <Education/>
      <Projects/>
    </>
  );
};

export default App;
