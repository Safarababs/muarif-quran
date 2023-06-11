import React, { useEffect } from "react";
import BackendCall from "../institute/BackendCall";
import Lecture from "../lectures/lectures";
import Books from "../books/books";
import Ladies from "../books/ladies/ladies.pdf";
import ladies from "../books/ladies/ladies.png";

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
          <span>hi {userData?.fName}! welcome to Muarif-e-quran & ahelaibait</span>
        </h1>
        <button onClick={handleLogout} className="btn">
          Logout
        </button>
        <Lecture />
        <Books title="Ladies Books" pdf={Ladies} image={ladies} />
      </section>
      <BackendCall />
    </>
  );
}

export default Dashboard;
