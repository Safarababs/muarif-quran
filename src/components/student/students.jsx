import React, { useEffect, useState } from "react";
import data from "../data";
import BackendCall from "../institute/BackendCall";
import NewStudent from "./newStudent";

function Students() {
  const [notes, setNotes] = useState([
    {
      fName: "",
      lName: "",
      nationality: "",
      dateOfBirth: "",
      gender: "",
      fatherName: "",
      email: "",
      courseName: "",
      _id: "",
    },
  ]);

  useEffect(() => {
    fetch(data.backend + "/students")
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
      <section className="heading-link">
        <h3>here you can found all students</h3>
        <p style={{ color: "white" }}>you have total {notes.length} students</p>
      </section>

      <section className="student">
        <div className="box-container">
          {notes.map((note) => (
            <NewStudent
              key={note._id}
              fName={note.fName}
              lName={note.lName}
              nationality={note.nationality}
              dateOfBirth={note.dateOfBirth}
              gender={note.gender}
              fatherName={note.fatherName}
              email={note.email}
              courseName={note.courseName}
            />
          ))}
        </div>
      </section>
      <BackendCall />
    </>
  );
}

export default Students;
