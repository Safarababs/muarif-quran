import React, { useEffect, useState } from "react";
import data from "../data";

function AddCourse(props) {
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

  function Buttons() {
    return (
      <>
        <a
          href={data.GOOGLE_MEET}
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

  const [notes, setNotes] = useState([
    {
      title: "",
      link: "",
      _id: "",
    },
  ]);

  useEffect(() => {
    fetch(data.backend + "/courses")
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          console.log(res);
        }
      })
      .then((jsonRes) => setNotes(jsonRes));
  });

  return (
    <>
      {notes.map((note) => (
        <div className="box" key={note._id}>
          <div className="image">
            <img src={note.link} alt="" />
            <h3>every {note.day}</h3>
          </div>
          <div className="content">
            <h3>
              {note.courseName} <span> {note.urdu}</span>
            </h3>
            <p>
              {note.teacher} give lecture of {note.courseName}. classes are held
              on google meet live from iran
            </p>
            {weekday === note.day && hour === note.hour ? Buttons() : Button()}
            <div className="icons">
              <span>
                {" "}
                <i className="fas fa-flag"></i> pakistan time{" "}
              </span>
              <span>
                {" "}
                <i className="fas fa-clock"></i> {note.hour}:00 hours gMT+5{" "}
              </span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default AddCourse;
