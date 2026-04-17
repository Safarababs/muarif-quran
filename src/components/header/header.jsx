import "./style.css";
import Darood from "../quran-quiz/Darood";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Darood />

      <div className="header-1">
        <div className="form-container">
          <div className="marquee">
            <p>
              بِسْمِ ٱللَّهِ ٱلرَّحْمٰنِ ٱلرَّحِيمِ اَللَّهُمَّ صَلِّ عَلَىٰ
              مُحَمَّدٍ وَآلِ مُحَمَّدٍ.
            </p>
          </div>
        </div>
      </div>

      <div className="header-2">
        <div id="menu" className="fas fa-bars"></div>

        <nav className="navbar">
          <ul>
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/about">about</Link>
            </li>
            <li>
              <Link to="/gallery">gallery</Link>
            </li>
            <li>
              <Link to="/courses">courses</Link>
            </li>
            <li>
              <Link to="/lectures">lectures</Link>
            </li>
            <li>
              <Link to="/books">books</Link>
            </li>
            <li>
              <Link to="/contact">contact</Link>
            </li>
            <li>
              <Link to="/quiz-register">Quiz Register</Link>
            </li>
            <li>
              <Link to="/quiz-page">Start Quiz</Link>
            </li>
            <li>
              <Link to="/results">Results</Link>
            </li>
            <li>
              <Link to="/admin-login">Admin Login</Link>
            </li>
          </ul>
        </nav>

        <div className="share">
          <a
            href="tel:+989388030994"
            target="_blank"
            rel="noreferrer"
            className="fas fa-phone"
          >
            {" "}
          </a>
          <a
            href="mailto:sajjadnaqvi9797@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="fas fa-envelope"
          >
            {" "}
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100066520402771"
            target="_blank"
            rel="noreferrer"
            className="fab fa-facebook-f"
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
          <a
            href="https://wa.me/989388030994/?text=I%20need%20some%20information%20can%20i%20?"
            target="_blank"
            rel="noreferrer"
            className="fab fa-whatsapp"
          >
            {" "}
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
