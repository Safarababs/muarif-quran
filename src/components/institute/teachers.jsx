import React from "react";
import naqvi from "../images/naqvi1.jpg";
import teacher1 from "../images/teacher2.jpeg";
import abidi from "../images/abidi.jpeg";
import farhat from "../images/farhat.jpeg";
import asghar from "../images/asghar.jpeg";
import nabi from "../images/nabi.jpeg";

function Teachers() {
  return (
    <>
      <h1 className="heading">our teachers</h1>

      <section className="trainer">
        <div className="image" data-aos="fade-right">
          <img src={naqvi} alt="" />
          <div className="share">
            <div className="box">
              <a
                href="https://www.facebook.com/SajjadNaqv"
                target="_blank"
                rel="noreferrer"
                className="fab fa-facebook-f"
              >
                {" "}
              </a>
            </div>

            <div className="box">
              <a
                href="https://wa.me/989388030994/?text=I%20need%20some%20information%20can%20i%20?"
                target="_blank"
                rel="noreferrer"
                className="fab fa-whatsapp"
              >
                {" "}
              </a>
            </div>

            <div className="box">
              <a
                href="tel:+989388030994"
                target="_blank"
                rel="noreferrer"
                className="fas fa-phone"
              >
                {" "}
              </a>
            </div>

            <div className="box">
              <a
                href="https://www.youtube.com/channel/UCmvODTtMxqu0--sBAZispHg"
                target="_blank"
                rel="noreferrer"
                className="fab fa-youtube"
              >
                {" "}
              </a>
            </div>
          </div>
        </div>

        <div className="content">
          <h3 data-aos="fade-up">
            Dr molana Syed Sajjad Hussain Naqvi Qom, Iran
          </h3>
          <span data-aos="fade-up">pHD in tafseer-e-quran</span>
          <p data-aos="fade-up" style={{ textTransform: "capitalize" }}>
            An innovative writer,motivational speaker,punctual,creative and
            determined. Highly skilled in teaching and explaining Mafaheem &amp;
            Tafseer-e-Quran. his slogan is quran is so easy to understand with
            me. currently teaching in Almustafa International
            University,Qom,iran, Lecturer and Head of International institute of
            Maarif-e-Quran w & Ehl-ul-bait(A.S)<br></br>
            Taught Mafaheem Quran,Persian and Arabic grammar,Tafseer
            Quran,Islamic Ethics,Taddabur-e-quran and Tajweed-e-quran.
          </p>
        </div>

        <div className="image" data-aos="fade-right">
          <img src={teacher1} alt="" />
        </div>

        <div className="content">
          <h3 data-aos="fade-up">dr molana Yousaf Jamali</h3>
          <span data-aos="fade-up">pHD in Firqaha-e-maasir Kalami</span>
          <p data-aos="fade-up" style={{ textTransform: "capitalize" }}>
            Highly skilled in teaching and explaining Mafaheem &amp; Tafseer
            Quran so easy to understand.
            <br></br>Current teaching in Almutafa International
            University,Qom,Iran
            <br></br>Taught Mafaheem Quran,Persian and Arabic grammar,Tafsser
            Quran,Islamic Ethics,Taddabur e quran and Tajweed e quran.
          </p>
        </div>

        <div className="image" data-aos="fade-right">
          <img src={abidi} alt="" />
        </div>

        <div className="content">
          <h3 data-aos="fade-up">molana Hassan Abidi</h3>
          <span data-aos="fade-up">pHD in History of Eh-lul-bait</span>
          <p data-aos="fade-up" style={{ textTransform: "capitalize" }}>
            An innovative writer,motivational speaker,punctual,creative and
            determined Current teaching in Almutafa International
            University,Qom,Iran. Taught Mafaheem Quran,Historyr,Tafsser
            Quran,Islamic Ethics,Taddabur e quran and Tajweed e quran.
          </p>
        </div>

        <div className="image" data-aos="fade-right">
          <img src={asghar} alt="" />
        </div>

        <div className="content">
          <h3 data-aos="fade-up">molana Asghar Ali Laskani</h3>
          <span data-aos="fade-up">pHD in Current affairs</span>
          <p data-aos="fade-up" style={{ textTransform: "capitalize" }}>
            Current teaching in Almutafa International University,Qom,Iran
            <br></br>Taught Mafaheem Quran,Historyr,Islamic Ethics,Taddabur e
            quran and Tajweed e quran
          </p>
        </div>

        <div className="image" data-aos="fade-right">
          <img src={farhat} alt="" />
        </div>

        <div className="content">
          <h3 data-aos="fade-up">Molana Dr Farhat Abbas Hiadri</h3>
          <span data-aos="fade-up">PhD in Allome & funoon Qirrat</span>
          <p data-aos="fade-up" style={{ textTransform: "capitalize" }}>
            Islamic & social lecturer
          </p>
        </div>

        <div className="image" data-aos="fade-right">
          <img src={nabi} alt="" />
        </div>

        <div className="content">
          <h3 data-aos="fade-up">Molana Qari Ghulam Nabi Sadiqi</h3>
          <span data-aos="fade-up">MPhil Quran & Allome Qirrat</span>
          <p data-aos="fade-up" style={{ textTransform: "capitalize" }}>
            Specilaization in Tajweed & Qirrat Online teacher for kids
          </p>
        </div>
      </section>
    </>
  );
}

export default Teachers;
