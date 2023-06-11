import React from "react";
import BackendCall from "../institute/BackendCall";

function MaleLinks() {
  

  return (
    <>
      <BackendCall />
      <div className="icons-container">
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
          <h3>whatsapp mr. sajjad naqvi</h3>
          <p>
            <a
              href="https://wa.me/989388030994/?text=I%20need%20some%20information%20can%20i%20?"
              target="_blank"
              rel="noreferrer"
            >
              message now!
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default MaleLinks;
