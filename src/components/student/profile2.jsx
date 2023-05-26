import React from "react";
import { useAuth } from "../admin/auth";
import { useNavigate } from "react-router-dom";
import FemaleLinks from "./femaleLinks";
import BackendCall from "../institute/BackendCall";
import Lecture from "../institute/lectures/lectures";
import Books from "../books/books";
import Ladies from "../books/ladies/ladies.pdf";
import ladies from "../books/ladies/ladies.png";

function FemaleDashboard() {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.logout();
    navigate("/");
  };
  return (
    <>
      <section
        className="heading-link"
        style={{
          background: "#87CEEB",
          marginTop: "7rem",
          height: "70vh",
          width: "100vw",
        }}
      >
        <h3>hi, welcome to muarif-e-quran!</h3>
        <p style={{ color: "yellow", fontFamily: "Urdu", fontSize: "4rem" }}>
          ادارہ معارف قرآن و اہلبیت میں خوش آمدید
        </p>
        <button onClick={handleLogout} className="button">
          Logout
        </button>
      </section>
      <section className="contact">
        <h1 className="heading">your Dashboard</h1>
        <section className="books" id="courses">
          <div className="box-container">
            <div className="box maqtal">
              <div className="image">
                <img src={ladies} alt="" />
              </div>
              <div className="content">
                <h3>
                  Ladies masile <span>خواتین کے مخصوص مسائل</span>
                </h3>

                <a href={Ladies} className="button" download>
                  <i className="fas fa-file-pdf">
                    {" "}
                    <span>download book</span>
                  </i>
                </a>
              </div>
            </div>
          </div>
        </section>
        <Lecture />
        <Books />
        <FemaleLinks />
        <BackendCall />
      </section>
    </>
  );
}

export default FemaleDashboard;
