import React from 'react';
import './HeroSection.css'

function HeroSection() {
  const Text =[
    "We create remarkable Digital products.",
    "Our brand is the most exquisite of all brands known to brands.we provide a cutting edge brand that suites your needs and we hope that you paronize what gives you value. Therefore, avoiding  mediocrity..",
    "Explore More"
  ]
  return (
    <>
      <div className="flex bg-black hero__banner">
        <div className="hero__text text-white m-10">
          <h1 className="text">We create remarkable <br /> Digital products.</h1>
          <p className="sub__text">{Text[1]}</p>
          <button className="btn-explore">Learn More</button>
          <div className="overlay"></div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;