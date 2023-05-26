import React from "react";
import image from "../tafseer kausar/1.png";
// books
import book1 from "../tafseer kausar/1.pdf";
import book2 from "../tafseer kausar/2.pdf";
import book3 from "../tafseer kausar/3.pdf";
import book4 from "../tafseer kausar/4.pdf";
import book5 from "../tafseer kausar/5.pdf";
import book6 from "../tafseer kausar/6.pdf";
import book7 from "../tafseer kausar/7.pdf";
import book8 from "../tafseer kausar/8.pdf";
import book9 from "../tafseer kausar/9.pdf";
import book10 from "../tafseer kausar/10.pdf";

const TafseerKausar = () => {
  return (
    <>
      <div className="box tafseer">
        <div className="image">
          <img src={image} alt="" />
        </div>
        <div className="content">
          <h3>
            Tafseer Kausar part 1<span>تفسیر الکوثر 1</span>
          </h3>

          <a href={book1} className="button" download>
            <i className="fas fa-file-pdf">
              {" "}
              <span>download book</span>
            </i>
          </a>
        </div>
      </div>
      <div className="box tafseer">
        <div className="image">
          <img src={image} alt="" />
        </div>
        <div className="content">
          <h3>
            Tafseer Kausar part 2<span>تفسیر الکوثر 2</span>
          </h3>

          <a href={book2} className="button" download>
            <i className="fas fa-file-pdf">
              {" "}
              <span>download book</span>
            </i>
          </a>
        </div>
      </div>

      <div className="box tafseer">
        <div className="image">
          <img src={image} alt="" />
        </div>
        <div className="content">
          <h3>
            Tafseer Kausar part 3<span>تفسیر الکوثر 3</span>
          </h3>

          <a href={book3} className="button" download>
            <i className="fas fa-file-pdf">
              {" "}
              <span>download book</span>
            </i>
          </a>
        </div>
      </div>

      <div className="box tafseer">
        <div className="image">
          <img src={image} alt="" />
        </div>
        <div className="content">
          <h3>
            Tafseer Kausar part 4<span>تفسیر الکوثر 4</span>
          </h3>

          <a href={book4} className="button" download>
            <i className="fas fa-file-pdf">
              {" "}
              <span>download book</span>
            </i>
          </a>
        </div>
      </div>

      <div className="box tafseer">
        <div className="image">
          <img src={image} alt="" />
        </div>
        <div className="content">
          <h3>
            Tafseer Kausar part 5<span>تفسیر الکوثر 5</span>
          </h3>

          <a href={book5} className="button" download>
            <i className="fas fa-file-pdf">
              {" "}
              <span>download book</span>
            </i>
          </a>
        </div>
      </div>

      <div className="box tafseer">
        <div className="image">
          <img src={image} alt="" />
        </div>
        <div className="content">
          <h3>
            Tafseer Kausar part 6<span>تفسیر الکوثر 6</span>
          </h3>

          <a href={book6} className="button" download>
            <i className="fas fa-file-pdf">
              {" "}
              <span>download book</span>
            </i>
          </a>
        </div>
      </div>

      <div className="box tafseer">
        <div className="image">
          <img src={image} alt="" />
        </div>
        <div className="content">
          <h3>
            Tafseer Kausar part 7<span>تفسیر الکوثر 7</span>
          </h3>

          <a href={book7} className="button" download>
            <i className="fas fa-file-pdf">
              {" "}
              <span>download book</span>
            </i>
          </a>
        </div>
      </div>

      <div className="box tafseer">
        <div className="image">
          <img src={image} alt="" />
        </div>
        <div className="content">
          <h3>
            Tafseer Kausar part 8<span>تفسیر الکوثر 8</span>
          </h3>

          <a href={book8} className="button" download>
            <i className="fas fa-file-pdf">
              {" "}
              <span>download book</span>
            </i>
          </a>
        </div>
      </div>

      <div className="box tafseer">
        <div className="image">
          <img src={image} alt="" />
        </div>
        <div className="content">
          <h3>
            Tafseer Kausar part 9<span>تفسیر الکوثر 9</span>
          </h3>

          <a href={book9} className="button" download>
            <i className="fas fa-file-pdf">
              {" "}
              <span>download book</span>
            </i>
          </a>
        </div>
      </div>

      <div className="box tafseer">
        <div className="image">
          <img src={image} alt="" />
        </div>
        <div className="content">
          <h3>
            Tafseer Kausar part 10<span>تفسیر الکوثر 10</span>
          </h3>

          <a href={book10} className="button" download>
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

export default TafseerKausar;
