import React from "react";
import "./courses.css"

// images
import img1 from "../images/back.jpg";
import img2 from "../images/homecourses images/Muslim-girl-Quran.webp";
import img3 from "../images/homecourses images/doubts.jpg";
import img4 from "../images/homecourses images/history.jpg";
import img5 from "../images/homecourses images/ethics.webp";
import img6 from "../images/homecourses images/practical.jpg";
import img7 from "../images/homecourses images/adovacacy.jpg";
import img8 from "../images/homecourses images/success.jpg";
import img9 from "../images/homecourses images/media.png";
import img10 from "../images/homecourses images/language.jpg";
import img11 from "../images/homecourses images/prudance.jpg";

function HomeCourses() {
  return (
    <section className="courses">
      <h1 className="heading"> <span>popular courses</span> </h1>

      <div className="box-container">
        <div className="box">
          <div className="image">
            <img src={img1} alt="" />
            <a href="/courses">
              mafaheem-e-quran
            </a>
          </div>
        </div>

        <div className="box" >
          <div className="image">
            <img src={img2} alt="" />
            <a href="/courses" >
              tafseer-e-quran
            </a>
          </div>
          
        </div>

        <div className="box" >
          <div className="image">
            <img src={img3} alt="" />
            <a href="/courses" >
              know your doubts
            </a>
          </div>
          
        </div>

        <div className="box" >
          <div className="image">
            <img src={img4} alt="" />
            <a href="/courses">
              history of masoomeen
            </a>
          </div>
          
        </div>

        <div className="box" >
          <div className="image">
            <img src={img5} alt="" />
            <a href="/courses">
              ethics
            </a>
          </div>
          
        </div>

        <div className="box" >
          <div className="image">
            <img src={img6} alt="" />
            <a href="/courses">
              practical rules
            </a>
          </div>
          
        </div>

        <div className="box" >
          <div className="image">
            <img src={img7} alt="" />
            <a href="/courses">
            Current Affairs
            </a>
          </div>
          
        </div>

        <div className="box" >
          <div className="image">
            <img src={img8} alt="" />
            <a href="/courses">
            successful life
            </a>
          </div>
          
        </div>

        <div className="box" >
          <div className="image">
            <img src={img9} alt="" />
            <a href="/courses">
            Effects of media and social media
            </a>
          </div>
          
        </div>

        <div className="box" >
          <div className="image">
            <img src={img10} alt="" />
            <a href="/courses">
            Arabic and Persian language courses
            </a>
          </div>
          
        </div>

        <div className="box">
          <div className="image">
            <img src={img11} alt="" />
            <a href="/courses">
            prudence in Quran
            </a>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default HomeCourses;
