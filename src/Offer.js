import React from "react";
import "animate.css";
import "./Offer.css";
import Image5 from "./img/offer.jpg";
import Image6 from "./img/murcian.jpg";

const Offer = ({ darkMode }) => {
  const data = [
    "Modern Facilities",
    "We have 5000 reviews and our customers trust our quality products and trust our own products.",
    "We Are the best branding Agency in the World.",
    "Top Notch Quality",
    " We have sold almost 10,000 plus brands across the globe. we dont say much but let our brand speak for itself.",
  ];
  const whiteStyle = {
    backgroundColor: "transparent",
    padding: 12,
    height: 500,
  };

  const blackStyle = {
    backgroundColor: "#cfa2ab",
    padding: 12,
    height: 500,
  };
  const blackStyleTwo = {
    backgroundColor: "black",
    padding: 12,
    height: 500,
  };
  const imgQuality = {
    height: 500,
    width: "100%",
    backgroundPosition: "center",
    backgroundSize: "contain",
    flexShrink: 0,
  };

  return (
    <>
      <div
        className={`${
          darkMode === "LightMode" ? "dark-modeTop" : "light-modeTop"
        }`}
      >
        <div className="grid lg:grid-cols-2 sm:grid-cols-12 md:grid-cols-12 gap-4 px-12 center ">
          <div style={whiteStyle} className="animate__animated animate__slideInDown m-12">
            <h1 className="px-10 my-5 capitalize offer__superText ">
              What we are <br />
              offering.
            </h1>
            <p className="px-10 top__facilities ">{data[0]}</p>
            <p className="px-10 py-10 review">{data[1]}</p>
            <button className="mx-10 btn-link">know more</button>
          </div>
          <div style={blackStyleTwo} className="animate__animated animate__slideInUp w-full">
            <img
              src={Image5}
              alt="firstOne"
              style={imgQuality}
              className="transition duration-500 ease-in-out hover:bg-tomato-600 transform hover:-translate-y-1 hover:scale-105"
            />
          </div>
          <div style={blackStyle}>
          <img
            src={Image6}
            alt="Murcian"
            style={imgQuality}
            className=" transition duration-500 ease-in-out hover:bg-tomato-600 transform hover:-translate-y-1 hover:scale-105"
          />
          </div>
          <div style={whiteStyle} className="animate__animated animate__slideInUp m-12">
            <h1 className="px-10 my-5 text-3xl capitalize offer__superText ">
              {data[2]}
            </h1>
            <p className="px-10 top__facilities">{data[3]}</p>
            <p className="px-10 my-5 review">{data[4]}</p>
            <button className="mx-9 btn-link" variant="primary">know more</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Offer;
