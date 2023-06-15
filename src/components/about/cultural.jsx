import React from "react";
// images
import img1 from "../images/cultural images/quiz.jpg";
import img2 from "../images/cultural images/speech.jpg";
import img3 from "../images/cultural images/competition.jpg";
import img4 from "../images/cultural images/knowledge.jpg";
import img5 from "../images/cultural images/seminar.jpg";
import img7 from "../images/cultural images/manajaat.jpg";
import BackendCall from "../institute/BackendCall";

function Cultural() {
  return (
    <>
      <section className="courses">
        <h1 className="heading">
          <span>Arranging Gatherings and Events for Students</span>
        </h1>
        <div className="box-container">
          <div className="box" >
            <div className="image">
              <img src={img7} alt="" />

              <a href="/contact">PRAYERS</a>
            </div>
          </div>

          <div className="box " >
            <div className="image">
              <img src={img1} alt="" />

              <a href="/contact">QUIZ PROGRAM</a>
            </div>
          </div>

          <div className="box " >
            <div className="image">
              <img src={img2} alt="" />

              <a href="/contact">COMPETITION OF TARTEEL</a>
            </div>
          </div>

          <div className="box " >
            <div className="image">
              <img src={img3} alt="" />

              <a href="/contact">SPEECH CONTEST</a>
            </div>
          </div>

          <div className="box" >
            <div className="image">
              <img src={img4} alt="" />

              <a href="/contact">ACADEMIC DISCUSSION</a>
            </div>
          </div>

          <div className="box" >
            <div className="image">
              <img src={img5} alt="" />

              <a href="/contact">SEMINAR</a>
            </div>
          </div>
        </div>
      </section>
      <BackendCall />
    </>
  );
}

export default Cultural;
