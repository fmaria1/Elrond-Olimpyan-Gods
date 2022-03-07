import React from "react";
import "./Gallery.css";
import artemis from "../Images/artemis";
import hades from "../Images/hades";
import hapollo from "../Images/hapollo";
import poseidon from "../Images/poseidon";
import zeus from "../Images/zeus";

const Gallery = () => {
  return (
    <div className="imageContainer">
      <div className="mosaicImage">
        <div className="mosaicItem5">
          <img src={hades} alt="" />
        </div>
        <div className="mosaicItem4 ">
          <img src={poseidon} alt="" />
        </div>
        <div className="mosaicItem3">
          <img src={hapollo} alt="" />
        </div>
        <div className="mosaicItem2">
          <img src={zeus} alt="" />
        </div>
        <div className="mosaicItem">
          <img src={artemis} alt="" />
        </div>
      </div>
    </div>
  );
};
export default Gallery;
