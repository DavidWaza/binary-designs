import React from "react";
import "./PhotoLink.css";
import "./Offer";

const PhotoLink = () => {
  return (
    <>
      <section className="offer__section">
        <p className="products__text">Our Products.</p>
        <p className="products__subtext">
          We select one of the <span className="bd">best designers</span> to
          showcase thier <br />
          products with us.
        </p>
        <div className=" flex grid lg:grid-cols-4 sm:grid-cols-12 gap-2 sm:w-full">
          <div className=" image__context prophesie">
            <div className="overlay__two"></div>
            <h1 className="image__context-text">PROPHESIE</h1>
            <p className="image__context-subtext">pinotage</p>
          </div>
          <div className="image__context bombay">
            <div className="overlay__two"></div>
            <h1 className="image__context-text">BOMBAY</h1>
            <p className="image__context-subtext">Sapphire</p>
          </div>
          <div className="image__context cura">
            <div className="overlay__two"></div>
            <h1 className="image__context-text">CURA</h1>
            <p className="image__context-subtext">Day Boost</p>
          </div>
          <div className="image__context tentenela">
            <div className="overlay__two"></div>
            <h1 className="image__context-text">TENTENELA</h1>
            <p className="image__context-subtext">The Company</p>
          </div>
        </div>
        <div className="btn-container">
          <button className="btn-explore__photolink mx-10 ">
            Show More
          </button>
        </div>
      </section>
    </>
  );
};
export default PhotoLink;
