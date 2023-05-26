import React from "react";

// books
import MadinaSayMadinaTak from "../maqtal/books/MadinaSayMadinaTak.pdf";
import MaqtalLahoof from "../maqtal/books/MaqtalLahoof.pdf";
import MaqtalHussain from "../maqtal/books/Maqtal-ul-Hussain.pdf";
import balagha from "../maqtal/books/nehjul balagha.pdf";
import falsafaHijab from "../maqtal/books/falsafaHijab.pdf";

// books
import image1 from "../maqtal/images/madina sy madina tk.png";
import image2 from "../maqtal/images/maqtal hussain.png";
import image3 from "../maqtal/images/MaqtalLahoof.png";
import balaghaImg from "../maqtal/images/balagha.png";
import falsafaHijabImg from "../maqtal/images/falsafaHijab.png";
import SahifaSajjadia from "../sahifa/Sahifa Sajjadia";
import Mafatee from "../Mafatee/Mafatee";

const Maqtal = () => {
  return (
    <>
      <div className="box maqtal">
        <div className="image">
          <img src={balaghaImg} alt="" />
        </div>
        <div className="content">
          <h3>
            Nehjul balagha <span>نہج البلاغہ</span>
          </h3>

          <a href={balagha} className="button" download>
            <i className="fas fa-file-pdf">
              {" "}
              <span>download book</span>
            </i>
          </a>
        </div>
      </div>

      <div className="box maqtal">
        <div className="image">
          <img src={image1} alt="" />
        </div>
        <div className="content">
          <h3>
            Madina sy madina tak <span>مدینہ سے مدینہ تک</span>
          </h3>

          <a href={MadinaSayMadinaTak} className="button" download>
            <i className="fas fa-file-pdf">
              {" "}
              <span>download book</span>
            </i>
          </a>
        </div>
      </div>

      <div className="box maqtal">
        <div className="image">
          <img src={image2} alt="" />
        </div>
        <div className="content">
          <h3>
            Maqtal-ul-Hussain <span>مقتل الحسین</span>
          </h3>

          <a href={MaqtalHussain} className="button" download>
            <i className="fas fa-file-pdf">
              {" "}
              <span>download book</span>
            </i>
          </a>
        </div>
      </div>

      <div className="box maqtal">
        <div className="image">
          <img src={image3} alt="" />
        </div>
        <div className="content">
          <h3>
            Maqtal Lahoof <span>مقتل لہوف</span>
          </h3>

          <a href={MaqtalLahoof} className="button" download>
            <i className="fas fa-file-pdf">
              {" "}
              <span>download book</span>
            </i>
          </a>
        </div>
      </div>

      <SahifaSajjadia />
      <Mafatee />

      <div className="box maqtal">
        <div className="image">
          <img src={falsafaHijabImg} alt="" />
        </div>
        <div className="content">
          <h3>
            falsafa Hijab <span>فلسفہ حجاب</span>
          </h3>

          <a href={falsafaHijab} className="button" download>
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

export default Maqtal;
