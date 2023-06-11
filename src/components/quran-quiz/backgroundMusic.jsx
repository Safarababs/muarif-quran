import React, { useEffect } from "react";
import video from "./video.mp4";

const BackgroundVideo = () => {
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

export default BackgroundVideo;
