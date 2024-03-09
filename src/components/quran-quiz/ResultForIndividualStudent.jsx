import React, { useEffect, useState } from "react";
import data from "../data";
import BackendCall from "../institute/BackendCall";
import "./quiz.css";

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
        const sortedNotes = jsonRes.sort(
          (a, b) => b.obtainedMarks - a.obtainedMarks
        );

        // Assign rank to each student
        sortedNotes.forEach((student, index) => {
          student.rank = getRankSuffix(index + 1);
        });

        setNotes(sortedNotes);

        setLoading(false);
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
    <>
      <form onSubmit={handleFilter} className="studentResult">
        <input
          type="text"
          value={phoneNumber}
          onChange={(event) => setPhoneNumber(event.target.value)}
          placeholder="Enter your phone number"
        />
        <button type="submit" className="btn">
          {loading ? "Loading" : "Check Results"}
        </button>
      </form>

      {filteredNotes.length > 0 ? (
        <section className="student">
          <div className="box-container" style={{ marginTop: "0" }}>
            {filteredNotes.map((note) => (
              <div key={note._id} className="data">
                <p className="card">phone Number: {note.phoneNumber}</p>
                <p className="card">name: {note.name}</p>
                <p className="card">city: {note.city}</p>

                <p className="card">obtained Marks: {note.obtainedMarks}</p>
                <p className="card">
                  total marks: {note.questionResults.length}
                </p>
                <p className="card" style={{ color: "red" }}>
                  Congratulations! you got {note.rank} position
                </p>

                {note.questionResults.map((question, index) => (
                  <div key={question._id} className="questionWise">
                    <h3>Question wise result: {index + 1} </h3>
                    <p className="answers">Question: {question.question}</p>
                    <p className="answers">
                      Your answer: {question.selectedAnswer}
                    </p>
                    <p className="answers">
                      Correct Answer: {question.correctAnswer}
                    </p>
                    {question.selectedAnswer === question.correctAnswer ? (
                      <p className="answers">
                        <span style={{ color: "green" }}>&#10004;</span>
                      </p>
                    ) : (
                      <p className="answers">
                        <span style={{ color: "red" }}>&#10006;</span>
                      </p>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>
      ) : null}

      <BackendCall />
    </>
  );
}

export default Results;
