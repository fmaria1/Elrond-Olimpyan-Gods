import React from "react";
import "./Video.css";
import fireBackground from "../../Images/backgroundVid";
import imgBackground from "../../Images/background";

const Video = () => {
  return (
    <div className="background-content">
      <video playsInline muted autoPlay loop src={fireBackground}>
        <source src={fireBackground} type="video/mp4" />
      </video>
      <img src={imgBackground} alt="img"></img>
    </div>
  );
};
export default Video;
