import React from "react";
// arabic books
import arabic0 from "../books/arabic/0.pdf";
import arabic1 from "../books/arabic/1.pdf";
import arabic2 from "../books/arabic/2.pdf";
import arabic3 from "../books/arabic/3.pdf";
import arabic4 from "../books/arabic/4.pdf";
import arabic5 from "../books/arabic/5.pdf";
import arabic6 from "../books/arabic/6.pdf";
import arabic7 from "../books/arabic/7.pdf";
import arabic8 from "../books/arabic/8.pdf";

// arabic images
import image0 from "../books/arabic/images/all.png";
import image1 from "../books/arabic/images/all.png";
import image2 from "../books/arabic/images/all.png";
import image3 from "../books/arabic/images/all.png";
import image4 from "../books/arabic/images/all.png";
import image5 from "../books/arabic/images/all.png";
import image6 from "../books/arabic/images/all.png";
import image7 from "../books/arabic/images/all.png";
import image8 from "../books/arabic/images/all.png";
import why from "../books/arabic/why.pdf";

const ArabicBooks = () => {
  return (
    <>
      <div className="box course">
        <div className="image">
          <img src={image0} alt="" />
        </div>
        <div className="content">
          <h3>
            arabic language introduction <span> عربی زبان</span>
          </h3>
          <a href={why} className="button" download>
            <i className="fas fa-file-pdf">
              {" "}
              <span>download book</span>
            </i>
          </a>
        </div>
      </div>

      <div className="box course">
        <div className="image">
          <img src={image0} alt="" />
        </div>
        <div className="content">
          <h3>
            arabic language 0 <span> عربی زبان</span>
          </h3>
          <a href={arabic0} className="button" download>
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
            arabic language 1 <span> عربی زبان</span>
          </h3>
          <a href={arabic1} className="button" download>
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
            arabic language 2 <span> عربی زبان</span>
          </h3>
          <a href={arabic2} className="button" download>
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
            arabic language 3 <span> عربی زبان</span>
          </h3>
          <a href={arabic3} className="button" download>
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
            arabic language 4 <span> عربی زبان</span>
          </h3>
          <a href={arabic4} className="button" download>
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
            arabic language 5 <span> عربی زبان</span>
          </h3>
          <a href={arabic5} className="button" download>
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
            arabic language 6 <span> عربی زبان</span>
          </h3>
          <a href={arabic6} className="button" download>
            <i className="fas fa-file-pdf">
              {" "}
              <span>download book</span>
            </i>
          </a>
        </div>
      </div>

      <div className="box course">
        <div className="image">
          <img src={image7} alt="" />
        </div>
        <div className="content">
          <h3>
            arabic language 7 <span> عربی زبان</span>
          </h3>
          <a href={arabic7} className="button" download>
            <i className="fas fa-file-pdf">
              {" "}
              <span>download book</span>
            </i>
          </a>
        </div>
      </div>

      <div className="box course">
        <div className="image">
          <img src={image8} alt="" />
        </div>
        <div className="content">
          <h3>
            arabic language 8 <span> عربی زبان</span>
          </h3>
          <a href={arabic8} className="button" download>
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

export default ArabicBooks;
