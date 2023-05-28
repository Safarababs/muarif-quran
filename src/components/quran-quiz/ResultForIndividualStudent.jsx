import React, { useEffect, useState } from "react";
import data from "../data";
import BackendCall from "../institute/BackendCall";
import NewResult from "./newResult";

function Results() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [notes, setNotes] = useState([
    {
      name: "",
      phoneNumber: "",
      obtainedMarks: "",
      _id: "",
    },
  ]);
  const [filteredNotes, setFilteredNotes] = useState([]);

  useEffect(() => {
    fetch(data.backend + "/results")
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Failed to fetch results");
        }
      })
      .then((jsonRes) => {
        setNotes(jsonRes);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleFilter = (event) => {
    event.preventDefault();

    // Filter the notes based on the phone number
    const filtered = notes.filter((note) => note.phoneNumber === phoneNumber);
    setFilteredNotes(filtered);
  };

  return (
    <>
      

      <form onSubmit={handleFilter} className="studentResult">
        <input
          type="text"
          value={phoneNumber}
          onChange={(event) => setPhoneNumber(event.target.value)}
          placeholder="Enter your phone number"
        />
        <button type="submit">Check Results</button>
      </form>

      {filteredNotes.length > 0 ? (
        <section className="student" >
          <div className="box-container" style={{marginTop:"0"}}>
            {filteredNotes.map((note) => (
              <NewResult
                key={note._id}
                name={note.name}
                phoneNumber={note.phoneNumber}
                obtainedMarks={note.obtainedMarks}
              />
            ))}
          </div>
        </section>
      ) : null}

      <BackendCall />
    </>
  );
}

export default Results;
