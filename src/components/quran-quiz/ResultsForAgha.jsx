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

  const generateFile = () => {
    const jsonData = JSON.stringify(notes);
    const fileContent = `const resultData = ${jsonData};`;
    const fileBlob = new Blob([fileContent], { type: "text/javascript" });
    const fileUrl = URL.createObjectURL(fileBlob);

    const downloadLink = document.createElement("a");
    downloadLink.href = fileUrl;
    downloadLink.download = "resultData.js";
    downloadLink.click();
    URL.revokeObjectURL(fileUrl);
  };

  useEffect(() => {
    fetch(data.backend + "/results")
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Error fetching results");
        }
      })
      .then((jsonRes) => setNotes(jsonRes))
      .catch((error) => {
        console.error("Error fetching results:", error);
      });
  }, []);

  return (
    <>
      <section className="heading-link">
        <h3>Here you can find all results</h3>
        <p style={{ color: "white" }}>You have a total of {notes.length} results</p>
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

      <button onClick={generateFile}>Generate File</button>

      <BackendCall />
    </>
  );
}

export default Results;
