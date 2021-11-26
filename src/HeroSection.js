import React from "react";
import "./HeroSection.css";
import "animate.css";

const HeroSection = () => {
  const Text = [
    "Digital products",
    " Our brand is the most exquisite of all brands known to brands.we provide a cutting edge brand that suites your needs and we hope that you paronize what gives you value. Therefore, avoiding  mediocrity..",
    "Explore More",
  ];
  return (
    <>
      <div>
        <ul className="hero__section">
          <li>
            <span></span>
          </li>
          <li>
            <span></span>
          </li>
          <li>
            <span></span>
          </li>
          <li>
            <span></span>
          </li>
        </ul>
        <div className="overlay"></div>
        <div className="animate__animated animate__zoomIn  hero-text">
          We create Remarkable
          <br />
          <span>Digital products.</span>
        </div>
        <p className="animate__animated animate__slideInUp white subtext container"> {Text[1]}</p>
        <button className="btn-explore animate__animated animate__slideInUp transition duration-500 ease-in-out hover:bg-tomato-600 transform hover:-translate-y-1 hover:scale-110">{Text[2]}</button>
      </div>
     
    </>
  );
};
export default HeroSection;
