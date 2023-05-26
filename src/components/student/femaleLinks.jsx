import React from "react";
import BackendCall from "../institute/BackendCall";

function FemaleLinks() {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const d = new Date();
  let weekday = days[d.getDay()];
  let hour = d.getUTCHours();

  return (
    <>
      <BackendCall />
      <div className="icons-container">
        <div className="icons">
          <i className="fab fa-google"></i>
          <h3>google meet</h3>
          {!weekday === "Thursday" && hour === 16 ? (
            <p>
              <a
                href="http://meet.google.com/twv-pkwa-efv"
                target="_blank"
                rel="noreferrer"
              >
                click to join class
              </a>
            </p>
          ) : (
            <p>
              <a href="/courses">see Class Time?</a>
            </p>
          )}
        </div>

        <div className="icons">
          <i className="fas fa-phone"></i>
          <h3>phone :</h3>
          <p>
            <a href="tel:+989388030994" target="_blank" rel="noreferrer">
              click to call me
            </a>
          </p>
        </div>

        <div className="icons">
          <i className="fas fa-envelope"></i>
          <h3>email</h3>
          <p>
            <a
              href="mailto:sajjadnaqvi9797@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              click to email me
            </a>
          </p>
        </div>

        <div className="icons">
          <i className="fab fa-telegram"></i>
          <h3>telegram official group:</h3>
          <p>
            <a
              href="https://t.me/short_islamic_courses"
              target="_blank"
              rel="noreferrer"
            >
              click to join telegram
            </a>
          </p>
        </div>
        <div className="icons">
          <i className="fab fa-facebook-f"></i>
          <h3>facebook official</h3>
          <p>
            <a
              href="https://www.facebook.com/profile.php?id=100066520402771"
              target="_blank"
              rel="noreferrer"
            >
              facebook official
            </a>
          </p>
        </div>

        <div className="icons">
          <i className="fab fa-youtube"></i>
          <h3>youtube official</h3>
          <p>
            <a
              href="https://www.youtube.com/channel/UCmvODTtMxqu0--sBAZispHg"
              target="_blank"
              rel="noreferrer"
            >
              youtube official
            </a>
          </p>
        </div>

        <div className="icons">
          <i className="fab fa-whatsapp"></i>
          <h3>whatsapp official group 1</h3>
          <p>
            <a
              href="https://chat.whatsapp.com/L1Pj9v7GepR1RgRSggrFQL"
              target="_blank"
              rel="noreferrer"
            >
              click to join
            </a>
          </p>
        </div>

        <div className="icons">
          <i className="fab fa-whatsapp"></i>
          <h3>whatsapp official group 2</h3>
          <p>
            <a
              href="https://chat.whatsapp.com/EsUysEO4AufA6501lQ4z5f"
              target="_blank"
              rel="noreferrer"
            >
              click to join
            </a>
          </p>
        </div>

        <div className="icons">
          <i className="fab fa-whatsapp"></i>
          <h3>whatsapp group muarif-quran & ahle bait 1</h3>
          <p>
            <a
              href="https://chat.whatsapp.com/Hi4OC3oy765Bn2Rg0AX26p"
              target="_blank"
              rel="noreferrer"
            >
              click to join
            </a>
          </p>
        </div>

        <div className="icons">
          <i className="fab fa-whatsapp"></i>
          <h3>whatsapp group muarif-quran & ahle bait 2</h3>
          <p>
            <a
              href="https://chat.whatsapp.com/Lx5cuKA5pGcDp8G866VjuH"
              target="_blank"
              rel="noreferrer"
            >
              click to join
            </a>
          </p>
        </div>

        <div className="icons">
          <i className="fab fa-whatsapp"></i>
          <h3>whatsapp mr. sajjad naqvi</h3>
          <p>
            <a
              href="https://wa.me/989388030994/?text=I%20need%20some%20information%20can%20i%20?"
              target="_blank"
              rel="noreferrer"
            >
              click to send message
            </a>
          </p>
        </div>

        <div className="icons">
          <i className="fab fa-whatsapp"></i>
          <h3>ladies chat group</h3>
          <p>
            <a
              href="https://chat.whatsapp.com/If4BNh22thdHxCPmDT4b3x"
              target="_blank"
              rel="noreferrer"
            >
              click to join
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default FemaleLinks;
