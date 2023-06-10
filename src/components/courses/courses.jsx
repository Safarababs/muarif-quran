import React from "react";
import img1 from "../images/persian language.png";
import img2 from "../images/arabic language.png";
import img4 from "../images/ahakam.png";
import img5 from "../images/tafseer.png";
import img6 from "../images/tajisd.png";
import img7 from "../images/MAFAHEEM.png";
import BackendCall from "../institute/BackendCall";
import "./courses.css";

function Courses() {
  const courses = [
    {
      id: 1,
      imageSrc: img5,
      alt: "Image 1",
      title: "tafseer-e-quran",
      details:
        "Molana sajjad hussain naqvi give lecture of tafseer-e-quran. classes are held on google meet from iran",
    },
    {
      id: 2,
      imageSrc: img7,
      alt: "Image 1",
      title: "mafaheem-e-quran",
      details:
        "Molana sajjad hussain naqvi give lecture of mafaheem-e-quran. classes are held on google meet from iran",
    },
    {
      id: 3,
      imageSrc: img1,
      alt: "Image 1",
      title: "persian language",
      details:
        "Molana sajjad hussain naqvi give lecture of persian language. classes are held on google meet from iran",
    },
    {
      id: 4,
      imageSrc: img2,
      alt: "Image 1",
      title: "arabic language",
      details:
        "Molana sajjad hussain naqvi give lecture of arabic language. classes are held on google meet from iran",
    },
    {
      id: 5,
      imageSrc: img6,
      alt: "Image 1",
      title: "asan tajweed",
      details:
        "Molana sajjad hussain naqvi give lecture of tajweed. classes are held on google meet from iran",
    },
    {
      id: 6,
      imageSrc: img4,
      alt: "Image 1",
      title: "fiqee ahakaam",
      details:
        "Molana sajjad hussain naqvi give lecture of faqee ahakhaam. classes are held on google meet from iran",
    },
  ];

  return (
    <section className="courses" id="courses">
      <div className="course-container">
        {courses.map((course) => (
          <div key={course.id} className="course-box">
            <img src={course.imageSrc} alt={course.title} />
            <div className="course-info">
              <h3>{course.title}</h3>
              <span>{course.details}</span>
            </div>
          </div>
        ))}
      </div>

      <BackendCall />
    </section>
  );
}

export default Courses;
