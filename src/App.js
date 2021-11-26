import React, { useState, useEffect } from "react";
import "./App.css";
import  NavBar from "./component/NavBar";
import HeroSection from "./HeroSection";
import Offer from "./Offer";
import PhotoLink from "./PhotoLink";

function App() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") || "LightMode"
  );

  useEffect(() => {
    !localStorage.getItem("darkMode") &&
      localStorage.setItem("darkMode", "DarkMode");
  }, []);

  const toggleMode = () => {
    if (darkMode === "LightMode") {
      localStorage.setItem("darkMode", "DarkMode");
    } else {
      localStorage.setItem("darkMode", "LightMode");
    }
    setDarkMode(localStorage.getItem("darkMode"));
  };

  return (
    <>
      <nav className="navOne">
        <div
          className={`flex p-6  ${
            darkMode === "LightMode" ? "dark-modeTop" : "light-modeTop"
          }`}
        >
          <div className=" px-9 intro-text">
            <h3 >BINARY CONSOLIDATE</h3>
          </div>
          <div className="px-12 text-center"></div>
          <button onClick={toggleMode} className="ml-auto toggle-btn">
            {darkMode}
          </button>
        </div>
      </nav>
      <nav
        className={`navTwo text-center p-12 ${
          darkMode === "LightMode" ? "dark-mode" : "light-mode"
        }`}
      >
        <NavBar className="Navbar"/>
      </nav>
      <HeroSection />
      <Offer className={darkMode}/>
      <PhotoLink />
    </>
  );
}

export default App;
