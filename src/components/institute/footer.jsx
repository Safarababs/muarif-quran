import React from "react";
import BackendCall from "./BackendCall";

function Footer() {
  return (
    <section className="footer" id="footer">
      <div id="share">
        <div className="box">
          <i className="fas fa-share"></i>
          <a
            href="https://www.facebook.com/profile.php?id=100066520402771"
            target="_blank"
            rel="noreferrer"
            className="fab fa-facebook"
          >
            {" "}
          </a>
        </div>

        <div className="box">
          <a
            href="https://chat.whatsapp.com/L1Pj9v7GepR1RgRSggrFQL"
            target="_blank"
            rel="noreferrer"
            className="fab fa-whatsapp"
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
      </div>

      <div className="box-container">
        <div className="box">
          <h3>
            <i className="fas fa-place-of-worship"></i> THE INSTITUTE OF QURAN
            AND AHL AL-BAYT a.S{" "}
          </h3>
          <p>
            islam in on your door step. learn online quran, ahkam, tajweed,
            arabic language, persian language, mafaheem-e-quram and much more!
          </p>
          <div className="share">
            <a
              href="https://www.facebook.com/profile.php?id=100066520402771"
              target="_blank"
              rel="noreferrer"
              className="fab fa-facebook"
            >
              {" "}
            </a>
            <a
              href="https://t.me/short_islamic_courses"
              target="_blank"
              rel="noreferrer"
              className="fab fa-telegram"
            >
              {" "}
            </a>
            <a
              href="https://chat.whatsapp.com/L1Pj9v7GepR1RgRSggrFQL"
              target="_blank"
              rel="noreferrer"
              className="fab fa-whatsapp"
            >
              {" "}
            </a>
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

      <div className="credit">
        iltimas-e-dua <span>mr. safar abbas</span> ©copyright{" "}
        {new Date().getFullYear()} | all rights reserved!{" "}
      </div>
      <BackendCall />
    </section>
  );
}

export default Footer;
