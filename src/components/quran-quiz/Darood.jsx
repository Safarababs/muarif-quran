import React from "react";
import video from "./darood.mp4";

const Darood = () => {
  

  return (
    <video id="background-video" autoPlay style={{display:"none"}}>
      <source src={video} type="video/mp4" />
    </video>
  );
};

export default Darood;
