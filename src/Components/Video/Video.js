import React from "react";
import "./Video.css";
import fireBackground from "../../Images/Comp_3_17.mp4";

const Video = () => {
  return (
    <video
      className="background-video"
      src={fireBackground}
      playsinline
      autoPlay
      loop
      muted
    >
      <source src={fireBackground} type="video/mp4" />
    </video>
  );
};
export default Video;
