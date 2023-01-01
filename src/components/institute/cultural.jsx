import React from "react";
// images
import img1 from "../images/cultural images/quiz.jpg";
import img2 from "../images/cultural images/speech.jpg";
import img3 from "../images/cultural images/competition.jpg";
import img4 from "../images/cultural images/knowledge.jpg";
import img5 from "../images/cultural images/seminar.jpg";
import img6 from "../images/cultural images/movies.jpg";
import img7 from "../images/cultural images/manajaat.jpg";

function Cultural() {
  return (
    <>
      <div className="heading-link" style={{ margin: "0" }}>
        <h3>cultural activities</h3>
      </div>

      <section className="cultural">
        <div className="box-container">
          <div className="box" data-aos="fade-right">
            <div className="image">
              <img src={img7} alt="" />
            </div>
            <div className="content">
              <h3>
                Prayers <span> دعا ومناجات</span>
              </h3>
              <a href="/contact" className="btn">
                know more
              </a>
            </div>
          </div>

          <div className="box " data-aos="fade-down">
            <div className="image">
              <img src={img1} alt="" />
            </div>
            <div className="content">
              <h3>
                Quiz program on Islamic and religious information{" "}
                <span> اسلامی و دینی معلومات پر کوئز پروگرام</span>
              </h3>
              <a href="/contact" className="btn">
                know more
              </a>
            </div>
          </div>

          <div className="box " data-aos="fade-down">
            <div className="image">
              <img src={img2} alt="" />
            </div>
            <div className="content">
              <h3>
                Competition of recitation and tartil{" "}
                <span> تلاوت و ترتیل کا مقابلہ</span>
              </h3>
              <a href="/contact" className="btn">
                know more
              </a>
            </div>
          </div>

          <div className="box " data-aos="fade-down">
            <div className="image">
              <img src={img3} alt="" />
            </div>
            <div className="content">
              <h3>
                Speech contest <span> تقریری مقابلہ</span>
              </h3>
              <a href="/contact" className="btn">
                know more
              </a>
            </div>
          </div>

          <div className="box" data-aos="fade-left">
            <div className="image">
              <img src={img4} alt="" />
            </div>
            <div className="content">
              <h3>
                Academic discussion <span> علمی مذاکرہ</span>
              </h3>
              <a href="/contact" className="btn">
                know more
              </a>
            </div>
          </div>

          <div className="box" data-aos="fade-left">
            <div className="image">
              <img src={img5} alt="" />
            </div>
            <div className="content">
              <h3>
                {" "}
                Seminar <span> سیمینار</span>
              </h3>

              <a href="/contact" className="btn">
                know more
              </a>
            </div>
          </div>

          <div className="box" data-aos="fade-left">
            <div className="image">
              <img src={img6} alt="" />
            </div>
            <div className="content">
              <h3>
                Islamic movies<span>اسلامی فلمیں</span>
              </h3>

              <a href="/contact" className="btn">
                know more
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Cultural;
