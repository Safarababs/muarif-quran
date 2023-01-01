import React from "react";
import image from "../mafaheem/image.png";
import mafaheem1 from "../mafaheem/mafaheem 1.pdf";
import mafaheem2 from "../mafaheem/mafaheem 2.pdf";
import mafaheem3 from "../mafaheem/mafaheem 3.pdf";

const MafaheemBooks = () => {
  return (
    <>
      <div className="box course">
        <div className="image">
          <img src={image} alt="" />
        </div>
        <div className="content">
          <h3>
            mafaheem-e-quran 1 <span>مفاہیم القرآن</span>
          </h3>

          <a href={mafaheem1} className="button" download>
            <i className="fas fa-file-pdf">
              {" "}
              <span>download book</span>
            </i>
          </a>
        </div>
      </div>

      <div className="box course">
        <div className="image">
          <img src={image} alt="" />
        </div>
        <div className="content">
          <h3>
            mafaheem-e-quran 2 <span>مفاہیم القرآن</span>
          </h3>

          <a href={mafaheem2} className="button" download>
            <i className="fas fa-file-pdf">
              {" "}
              <span>download book</span>
            </i>
          </a>
        </div>
      </div>

      <div className="box course">
        <div className="image">
          <img src={image} alt="" />
        </div>
        <div className="content">
          <h3>
            mafaheem-e-quran 3 <span>مفاہیم القرآن</span>
          </h3>

          <a href={mafaheem3} className="button" download>
            <i className="fas fa-file-pdf">
              {" "}
              <span>download book</span>
            </i>
          </a>
        </div>
      </div>
    </>
  );
};

export default MafaheemBooks;
