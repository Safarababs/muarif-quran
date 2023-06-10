import React from "react";
import "./Gallery.css";

// images
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";
import img4 from "./images/img4.jpg";
import img5 from "./images/img5.jpg";
import img6 from "./images/img6.jpg";
import img7 from "./images/img7.jpeg";
import img8 from "./images/img8.jpeg";
import img9 from "./images/img9.jpeg";
import img10 from "./images/img10.jpg";
import img11 from "./images/img11.jpg";
import img12 from "./images/img12.jpg";
import img13 from "./images/img13.jpg";
import img14 from "./images/img14.jpg";
import img15 from "./images/img15.jpg";
import img16 from "./images/img16.jpg";
import img17 from "./images/img17.jpg";
import img18 from "./images/img18.jpg";
import img19 from "../images/summer camp/1.jpg";
import img20 from "../images/summer camp/2.jpg";
import img21 from "../images/summer camp/3.jpg";


function Gallery() {
  const images = [
    { id: 1, src: img1, alt: "Image 1" },
    { id: 2, src: img2, alt: "Image 2" },
    { id: 3, src: img3, alt: "Image 3" },
    { id: 4, src: img4, alt: "Image 1" },
    { id: 5, src: img5, alt: "Image 2" },
    { id: 6, src: img6, alt: "Image 3" },
    { id: 7, src: img7, alt: "Image 1" },
    { id: 8, src: img8, alt: "Image 2" },
    { id: 9, src: img9, alt: "Image 3" },
    { id: 10, src: img10, alt: "Image 1" },
    { id: 11, src: img11, alt: "Image 2" },
    { id: 12, src: img12, alt: "Image 3" },
    { id: 13, src: img13, alt: "Image 1" },
    { id: 14, src: img14, alt: "Image 2" },
    { id: 15, src: img15, alt: "Image 3" },
    { id: 16, src: img16, alt: "Image 1" },
    { id: 17, src: img17, alt: "Image 2" },
    { id: 18, src: img18, alt: "Image 3" },
    { id: 19, src: img19, alt: "Image 1" },
    { id: 20, src: img20, alt: "Image 2" },
    { id: 21, src: img21, alt: "Image 3" },
  ];
  return (
    <div className="gallery">
      {images.map((image) => (
        <img
          key={image.id}
          src={image.src}
          alt={image.alt}
          className="gallery__image"
        />
      ))}
    </div>
  );
}

export default Gallery;
