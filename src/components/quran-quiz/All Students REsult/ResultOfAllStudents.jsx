import React, { useEffect, useState } from "react";
import data from "../../data";
import BackendCall from "../../institute/BackendCall";
import "./ResultCard.css";

function Results() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(data.backend + "/results")
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Failed to fetch results");
        }
      })
      .then((jsonRes) => {
        // Sort students by obtained marks in descending order
        const sortedNotes = jsonRes.sort((a, b) => b.obtainedMarks - a.obtainedMarks);

        // Assign rank to each student
        sortedNotes.forEach((student, index) => {
          student.rank = getRankSuffix(index + 1); // Format rank as 1st, 2nd, 3rd, etc.
        });
        

        setNotes(sortedNotes);
        console.log(sortedNotes);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  


  // Function to get the rank suffix (e.g., 1st, 2nd, 3rd)
  const getRankSuffix = (rank) => {
    if (rank === 1) {
      return "1st";
      
    } else if (rank === 2) {
      return "2nd";
    } else if (rank === 3) {
      return "3rd";
    } else {
      return `${rank}th`;
    }
  };

  

  return (
    <div className="result-card-container">
      <h1 className="text-center"><h1 style={{color: "red", display:"inline"}}>{notes.length}</h1> Results Found</h1>
      <div className="result-cards">
        {loading ? (
          <p>Loading...</p>
        ) : (
          
          notes.map((note, index) => (
            <div key={note._id} className="result-card">
              <h2>{note.name}</h2>
              <p>{note.rank} postiion</p>
              <p>City: {note.city}</p>

              <p>Obtained Marks: {note.obtainedMarks}</p>
              <p>Total Marks: {note.questionResults.length}</p>
            </div>
          ))
        )}
      </div>
      <BackendCall />
    </div>
  );
}

export default Results;
