import React from "react";
import naqvi from "../images/donate.jpg";

function Doante() {
  return (
    <>
      <section className="heading-link" style={{ marginTop: "0" }}>
        <h3 className="about-title">we need your support and help</h3>
      </section>

      <section className="donate">
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
    </>
  );
}

export default Doante;
