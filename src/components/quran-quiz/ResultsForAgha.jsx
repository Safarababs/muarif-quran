import React, { useEffect, useState } from "react";
import data from "../data";
import BackendCall from "../institute/BackendCall";
import NewResult from "./newResult";

function Results() {
  const [notes, setNotes] = useState([
    {
      name: "",
      phoneNumber: "",
      obtainedMarks: "",
      _id: "",
    },
  ]);

  useEffect(() => {
    fetch(data.backend + "/results")
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          
        }
      })
      .then((jsonRes) => setNotes(jsonRes));
     
  });
  return (
    <>
      <section className="heading-link">
        <h3>here you can found all results</h3>
        <p style={{ color: "white" }}>you have total {notes.length} results</p>
      </section>

      <section className="student">
        <div className="box-container">
          {notes.map((note) => (
            <NewResult
              key={note._id}
              name={note.name}
              phoneNumber={note.phoneNumber}
              obtainedMarks={note.obtainedMarks}
              
            />
          ))}
        </div>
      </section>
      <BackendCall />
    </>
  );
}

export default Results;
