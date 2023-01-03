import React from "react";
import img1 from "../images/persian language.png";
import img2 from "../images/arabic language.png";
import img4 from "../images/ahakam.png";
import img5 from "../images/tafseer.png";
import img6 from "../images/tajisd.png";
import img7 from "../images/MAFAHEEM.png";
import img8 from "../images/MAFAHEEM.png";
import img9 from "../images/tafseer.png";
import img10 from "../images/prayer.png";
import BackendCall from "./BackendCall";

function Courses() {
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

  const pray = {
    Sunday: "اللھم ارزقنا شفاعۃ الحسین یوم الورود",
    Monday: "اللھم ارزقنا فی الدنیا زیارۃ الحسین",
    Tuesday: "اللھم اکتبنا من زوار الحسین",
    Wednesday: "اللھم اجعلنا من الباقین فی عزا الحسین",
    Thursday: "اللھم صل علی محمد وآل محمد",
    Friday: "اللھم احشرنا فی زمرۃ الحسین",
    Saturday: "اللھم ادخلناالجنۃ من باب الحسین",
  };

  function Manajaat() {
    if (weekday === "Sunday") {
      return (
        <h3>
          <span>{pray.Sunday}</span>
        </h3>
      );
    } else if (weekday === "Monday") {
      return (
        <h3>
          <span>{pray.Monday}</span>
        </h3>
      );
    } else if (weekday === "Tuesday") {
      return (
        <h3>
          <span>{pray.Tuesday}</span>
        </h3>
      );
    } else if (weekday === "Wednesday") {
      return (
        <h3>
          <span>{pray.Wednesday}</span>
        </h3>
      );
    } else if (weekday === "Thursday") {
      return (
        <h3>
          <span>{pray.Thursday}</span>
        </h3>
      );
    } else if (weekday === "Friday") {
      return (
        <h3>
          <span>{pray.Friday}</span>
        </h3>
      );
    } else if (weekday === "Saturday") {
      return (
        <h3>
          <span>{pray.Saturday}</span>
        </h3>
      );
    }
  }

  function Buttons() {
    return (
      <>
        <a
          href="http://meet.google.com/twv-pkwa-efv"
          target="_blank"
          rel="noreferrer"
          className="button"
        >
          click to join class
        </a>
        <a href="/books" className="button">
          <i className="fas fa-file-pdf">
            {" "}
            <span>download book</span>
          </i>
        </a>
      </>
    );
  }

  function Button() {
    return (
      <a href="/books" className="button">
        <i className="fas fa-file-pdf">
          {" "}
          <span>download book</span>
        </i>
      </a>
    );
  }

  return (
    <section className="courses" id="courses">
      <div className="box-container screenPadding">
        <div className="box">
          <div className="image">
            <img src={img5} alt="" />
            <h3>every monday</h3>
          </div>
          <div className="content">
            <h3>
              tafseer-e-quran <span> تفسیر القرآن</span>
            </h3>
            <p>
              Molana sajjad hussain naqvi give lecture of tafseer-e-quran.
              classes are held on google meet from iran
            </p>
            {weekday === "Monday" && hour === 16 ? Buttons() : Button()}
            <div className="icons">
              <span>
                {" "}
                <i className="fas fa-flag"></i> pakistan time{" "}
              </span>
              <span>
                {" "}
                <i className="fas fa-clock"></i> 21:00 hours gMT+5{" "}
              </span>
            </div>
          </div>
        </div>

        <div className="box">
          <div className="image">
            <img src={img7} alt="" />
            <h3>every tuesday</h3>
          </div>
          <div className="content">
            <h3>
              mafaheem-e-quran <span> مفاہیم القرآن</span>
            </h3>
            <p>
              Molana sajjad hussain naqvi give lecture of mafaheem-e-quran.
              classes are held on google meet from iran
            </p>
            {weekday === "Tuesday" && hour === 16 ? Buttons() : Button()}

            <div className="icons">
              <span>
                {" "}
                <i className="fas fa-flag"></i> pakistan time{" "}
              </span>
              <span>
                {" "}
                <i className="fas fa-clock"></i> 21:00 hours gMT+5{" "}
              </span>
            </div>
          </div>
        </div>

        <div className="box">
          <div className="image">
            <img src={img8} alt="" />
            <h3>every wednesday</h3>
          </div>
          <div className="content">
            <h3>
              mafaheem-e-quran <span> مفاہیم القرآن</span>
            </h3>
            <p>
              Molana sajjad hussain naqvi give lecture of mafaheem-e-quran.
              classes are held on google meet from iran
            </p>
            {weekday === "Wednesday" && hour === 16 ? Buttons() : Button()}
            <div className="icons">
              <span>
                {" "}
                <i className="fas fa-flag"></i> pakistan time{" "}
              </span>
              <span>
                {" "}
                <i className="fas fa-clock"></i> 21:00 hours gMT+5{" "}
              </span>
            </div>
          </div>
        </div>

        <div className="box">
          <div className="image">
            <img src={img10} alt="" />
            <h3>thursday</h3>
          </div>
          <div className="content">
            <h3>
              shab-e-juma <span> شب جمعہ، شب مغفرت</span>
            </h3>
            <p>
              this night is important to pray from allah kareem about our sins
              and those who are not with us. keep rememebr in prayers
            </p>
            {Manajaat()}
            <div className="icons">
              <span>
                {" "}
                <i className="fas fa-flag"></i> pakistan time{" "}
              </span>
              <span>
                {" "}
                <i className="fas fa-clock"></i> 19:00 hours gMT+5
              </span>
            </div>
          </div>
        </div>

        <div className="box">
          <div className="image">
            <img src={img9} alt="" />
            <h3>every friday</h3>
          </div>
          <div className="content">
            <h3>
              tafseer-e-quran <span> تفسیر القرآن</span>
            </h3>
            <p>
              Molana sajjad hussain naqvi give lecture of tafseer-e-quran.
              classes are held on google meet from iran
            </p>
            {weekday === "Friday" && hour === 16 ? Buttons() : Button()}
            <div className="icons">
              <span>
                {" "}
                <i className="fas fa-flag"></i> pakistan time{" "}
              </span>
              <span>
                {" "}
                <i className="fas fa-clock"></i> 21:00 hours gMT+5{" "}
              </span>
            </div>
          </div>
        </div>

        <div className="box">
          <div className="image">
            <img src={img1} alt="" />
            <h3>every saturday</h3>
          </div>
          <div className="content">
            <h3>
              persian language <span> فارسی زبان</span>
            </h3>
            <p>
              Molana sajjad hussain naqvi give lecture of persian language level
              1. classes are held on google meet from iran
            </p>
            {weekday === "Saturday" && hour === 16 ? Buttons() : Button()}
            <div className="icons">
              <span>
                {" "}
                <i className="fas fa-flag"></i> pakistan time{" "}
              </span>
              <span>
                {" "}
                <i className="fas fa-clock"></i> 21:00 hours gMT+5{" "}
              </span>
            </div>
          </div>
        </div>

        <div className="box">
          <div className="image">
            <img src={img2} alt="" />
            <h3>every saturday</h3>
          </div>
          <div className="content">
            <h3>
              arabic language <span> عربی زبان</span>
            </h3>
            <p>
              Molana sajjad hussain naqvi give lecture of arabic language level
              1. classes are held on google meet from iran
            </p>
            {weekday === "Saturday" && hour === 17 ? Buttons() : Button()}
            <div className="icons">
              <span>
                {" "}
                <i className="fas fa-flag"></i> pakistan time{" "}
              </span>
              <span>
                {" "}
                <i className="fas fa-clock"></i> 22:00 hours gMT+5{" "}
              </span>
            </div>
          </div>
        </div>

        <div className="box">
          <div className="image">
            <img src={img6} alt="" />
            <h3>every sunday</h3>
          </div>
          <div className="content">
            <h3>
              asan tajweed <span> آسان تجوید</span>
            </h3>
            <p>
              Molana sajjad hussain naqvi give lecture of asan tajweed level 1.
              classes are held on google meet from iran
            </p>
            {weekday === "Sunday" && hour === 16 ? Buttons() : Button()}
            <div className="icons">
              <span>
                {" "}
                <i className="fas fa-flag"></i> pakistan time{" "}
              </span>
              <span>
                {" "}
                <i className="fas fa-clock"></i> 21:00 hours gMT+5{" "}
              </span>
            </div>
          </div>
        </div>

        <div className="box">
          <div className="image">
            <img src={img4} alt="" />
            <h3>every sunday</h3>
          </div>
          <div className="content">
            <h3>
              fiqee ahkham <span> فقہی شرعی احکام </span>
            </h3>
            <p>
              Molana sajjad hussain naqvi give lecture of fiqee ahkham lavel 1.
              classes are held on google meet from iran
            </p>
            {weekday === "Sunday" && hour === 17 ? Buttons() : Button()}
            <div className="icons">
              <span>
                {" "}
                <i className="fas fa-flag"></i> pakistan time{" "}
              </span>
              <span>
                {" "}
                <i className="fas fa-clock"></i> 22:00 hours gMT+5{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
      <BackendCall />
    </section>
  );
}

export default Courses;
