import React, { useEffect } from "react";
import BackendCall from "../institute/BackendCall";
import Lecture from "../lectures/lectures";
import Books from "../books/books";
import LadiesPDF from "../books/ladies/ladies.pdf";
import ladiesImage from "../books/ladies/ladies.png";

import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("userData"));

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      // User is not logged in, navigate to the login page
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    // Clear user data from local storage and set isLoggedIn to false
    localStorage.removeItem("userData");
    localStorage.removeItem("isLoggedIn");

    // Redirect to the login page
    navigate("/logout");
  };

  return (
    <>
      <section className="dashboard">
        <h1 className="heading">
          <span>
            Hi {userData?.fName}! Welcome to Muarif-e-Quran & Ahelaibait
          </span>
        </h1>

        <button onClick={handleLogout} className="btn">
          Logout
        </button>
        <Lecture />
        <Books title="Ladies Books" pdf={LadiesPDF} image={ladiesImage} />
      </section>
      <BackendCall />
    </>
  );
}

export default Dashboard;
