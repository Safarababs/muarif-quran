import React, { useEffect } from "react";
import video from "./darood.mp4";

const Darood = () => {
  useEffect(() => {
    const video = document.getElementById("background-video");
    video.play();
  }, []);

  return (
    <video id="background-video" autoPlay style={{display:"none"}}>
      <source src={video} type="video/mp4" />
    </video>
  );
};

export default Darood;
