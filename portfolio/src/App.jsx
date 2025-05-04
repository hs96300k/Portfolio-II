import React from "react";
import Squares from "./components/Background/Squares";
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./components/Home/Home";

const App = () => {
  return (
    <>
      <Home />
      <Navbar />
      <Squares />
    </>
  );
};

export default App;
