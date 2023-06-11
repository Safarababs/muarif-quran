import React from "react";
import tozeeKhamnaisb from "../tozee/khamnai.pdf";
import tozeeSistani from "../tozee/tozee sistani.pdf";
import image from "../tozee/image.png";
import image1 from "../tozee/image1.png";
import ladies from "../ladies/ladies.png";
import Ladies from "../ladies/ladies.pdf";

const Tozee = () => {
  return (
    <>
      <div className="box tozee">
        <div className="image">
          <img src={image1} alt="" />
        </div>
        <div className="content">
          <h3>
            agha khamnai <span>توضیح المسایّل</span>
          </h3>

          <a href={tozeeKhamnaisb} className="button" download>
            <i className="fas fa-file-pdf">
              {" "}
              <span>download book</span>
            </i>
          </a>
        </div>
      </div>

      <div className="box tozee">
        <div className="image">
          <img src={image} alt="" />
        </div>
        <div className="content">
          <h3>
            agha sistani <span>توضیح المسایّل</span>
          </h3>

          <a href={tozeeSistani} className="button" download>
            <i className="fas fa-file-pdf">
              {" "}
              <span>download book</span>
            </i>
          </a>
        </div>
      </div>

      <div className="box tozee">
        <div className="image">
          <img src={ladies} alt="" />
        </div>
        <div className="content">
          <h3>
            Ladies masile <span>خواتین کے مخصوص مسائل</span>
          </h3>

          <a href={Ladies} className="button" download>
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

export default Tozee;
