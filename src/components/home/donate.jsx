import React from "react";
import naqvi from "../images/donate.jpg";
import BackendCall from "../institute/BackendCall";

function Doante() {
  return (
    <>
      <section className="donate">
        <h1 className="heading">
          <span>we need your support and help</span>
        </h1>
        <div className="content" style={{ textAlign: "left" }}>
          <h3
            className="about-title"
            style={{ color: "red", fontWeight: "bolder" }}
          >
            donate us now
          </h3>
          <p style={{ color: "black" }}>
            Account title : Syed Sajjad  Hussain Shah<br></br>
            Account number:02400101601462<br></br>
            Meezan Bank Samnabad Lahore branch
          </p>
        </div>

        <div className="image">
          <img src={naqvi} alt="" />
        </div>
      </section>
      <BackendCall />
    </>
  );
}

export default Doante;
