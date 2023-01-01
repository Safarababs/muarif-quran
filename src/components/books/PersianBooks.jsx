import React from "react";
// books
import farsi0 from "../books/persian/farsi 0.pdf";
import farsi1 from "../books/persian/farsi 1.pdf";
import farsi2 from "../books/persian/farsi 2.pdf";
import farsi3 from "../books/persian/farsi 3.pdf";
import farsi4 from "../books/persian/farsi 4.pdf";
import farsi5 from "../books/persian/farsi 5.pdf";
import farsi6 from "../books/persian/farsi 6.pdf";

// images
import image0 from "../books/persian/images/all.png";
import image1 from "../books/persian/images/all.png";
import image2 from "../books/persian/images/all.png";
import image3 from "../books/persian/images/all.png";
import image4 from "../books/persian/images/all.png";
import image5 from "../books/persian/images/all.png";
import image6 from "../books/persian/images/all.png";

const PersianBooks = () => {
  return (
    <>
      <div className="box course">
        <div className="image">
          <img src={image0} alt="" />
        </div>
        <div className="content">
          <h3>
            persian language 0 <span> فارسی زبان</span>
          </h3>

          <a href={farsi0} className="button" download>
            <i className="fas fa-file-pdf">
              {" "}
              <span>download book</span>
            </i>
          </a>
        </div>
      </div>

      <div className="box course">
        <div className="image">
          <img src={image1} alt="" />
        </div>
        <div className="content">
          <h3>
            persian language 1 <span> فارسی زبان</span>
          </h3>

          <a href={farsi1} className="button" download>
            <i className="fas fa-file-pdf">
              {" "}
              <span>download book</span>
            </i>
          </a>
        </div>
      </div>

      <div className="box course">
        <div className="image">
          <img src={image2} alt="" />
        </div>
        <div className="content">
          <h3>
            persian language 2 <span> فارسی زبان</span>
          </h3>

          <a href={farsi2} className="button" download>
            <i className="fas fa-file-pdf">
              {" "}
              <span>download book</span>
            </i>
          </a>
        </div>
      </div>

      <div className="box course">
        <div className="image">
          <img src={image3} alt="" />
        </div>
        <div className="content">
          <h3>
            persian language 3 <span> فارسی زبان</span>
          </h3>

          <a href={farsi3} className="button" download>
            <i className="fas fa-file-pdf">
              {" "}
              <span>download book</span>
            </i>
          </a>
        </div>
      </div>

      <div className="box course">
        <div className="image">
          <img src={image4} alt="" />
        </div>
        <div className="content">
          <h3>
            persian language 4 <span> فارسی زبان</span>
          </h3>

          <a href={farsi4} className="button" download>
            <i className="fas fa-file-pdf">
              {" "}
              <span>download book</span>
            </i>
          </a>
        </div>
      </div>

      <div className="box course">
        <div className="image">
          <img src={image5} alt="" />
        </div>
        <div className="content">
          <h3>
            persian language 5 <span> فارسی زبان</span>
          </h3>

          <a href={farsi5} className="button" download>
            <i className="fas fa-file-pdf">
              {" "}
              <span>download book</span>
            </i>
          </a>
        </div>
      </div>

      <div className="box course">
        <div className="image">
          <img src={image6} alt="" />
        </div>
        <div className="content">
          <h3>
            persian language 6 <span> فارسی زبان</span>
          </h3>

          <a href={farsi6} className="button" download>
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

export default PersianBooks;
