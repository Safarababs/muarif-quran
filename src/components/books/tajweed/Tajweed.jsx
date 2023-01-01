import React from "react";
import tajweed from "../tajweed/tajweed2.pdf";
import image from "../tajweed/tajweed.png";

const Tajweed = () => {
  return (
    <div className="box course">
      <div className="image">
        <img src={image} alt="" />
      </div>
      <div className="content">
        <h3>
          tajweed-e-quran <span> تجوید القرآن</span>
        </h3>

        <a href={tajweed} className="button" download>
          <i className="fas fa-file-pdf">
            {" "}
            <span>download book</span>
          </i>
        </a>
      </div>
    </div>
  );
};

export default Tajweed;
