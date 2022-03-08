import React from "react";
import "./Video.css";
import fireBackground from "../../Images/backgroundVid";

const Video = () => {
  return (
    <div className="background-content">
      <video playsInline muted autoPlay loop src={fireBackground}>
        <source src={fireBackground} type="video/mp4" />
      </video>
    </div>
  );
};
export default Video;
