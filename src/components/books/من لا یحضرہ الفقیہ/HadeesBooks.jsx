import React from "react";

// من لا یحضر الفقیہ
import book1 from "../من لا یحضرہ الفقیہ/1.pdf";
import book2 from "../من لا یحضرہ الفقیہ/2.pdf";
import book3 from "../من لا یحضرہ الفقیہ/3.pdf";
import book4 from "../من لا یحضرہ الفقیہ/4.pdf";

// images
import image from "../من لا یحضرہ الفقیہ/1.jpg";

const HadeesBooks = () => {
  return (
    <>
      <div className="box hadees">
        <div className="image">
          <img src={image} alt="" />
        </div>
        <div className="content">
          <h3>
            Man la yazur-ul-faqee part 1<span> من لا یحضر الفقیہ جلد 1</span>
          </h3>

          <a href={book1} className="button" download>
            <i className="fas fa-file-pdf">
              {" "}
              <span>download book</span>
            </i>
          </a>
        </div>
      </div>

      <div className="box hadees">
        <div className="image">
          <img src={image} alt="" />
        </div>
        <div className="content">
          <h3>
            Man la yazur-ul-faqee part 2 <span> من لا یحضر الفقیہ جلد 2</span>
          </h3>

          <a href={book2} className="button" download>
            <i className="fas fa-file-pdf">
              {" "}
              <span>download book</span>
            </i>
          </a>
        </div>
      </div>

      <div className="box hadees">
        <div className="image">
          <img src={image} alt="" />
        </div>
        <div className="content">
          <h3>
            Man la yazur-ul-faqee part 3 <span> من لا یحضر الفقیہ جلد 3</span>
          </h3>

          <a href={book3} className="button" download>
            <i className="fas fa-file-pdf">
              {" "}
              <span>download book</span>
            </i>
          </a>
        </div>
      </div>

      <div className="box hadees">
        <div className="image">
          <img src={image} alt="" />
        </div>
        <div className="content">
          <h3>
            Man la yazur-ul-faqee part 4 <span> من لا یحضر الفقیہ جلد 4</span>
          </h3>

          <a href={book4} className="button" download>
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

export default HadeesBooks;
