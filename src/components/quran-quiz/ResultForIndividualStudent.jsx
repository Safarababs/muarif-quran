import React, { useEffect, useState } from "react";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import BackendCall from "../institute/BackendCall";
import "./quiz.css";
import { db } from "../../firebase";

function Results() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [notes, setNotes] = useState([]);
  const [filteredNotes, setFilteredNotes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        setLoading(true);

        const q = query(
          collection(db, "quizResults"),
          orderBy("obtainedMarks", "desc"),
        );

        const querySnapshot = await getDocs(q);

        const results = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        const rankedResults = results.map((student, index) => ({
          ...student,
          rankNumber: index + 1,
          rank: getRankSuffix(index + 1),
        }));

        setNotes(rankedResults);
      } catch (error) {
        console.error("Error fetching results:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, []);

  const handleFilter = (event) => {
    event.preventDefault();

    const cleanPhone = phoneNumber.trim();

    const filtered = notes.filter(
      (note) => (note.phoneNumber || "").trim() === cleanPhone,
    );

    setFilteredNotes(filtered);
  };

  const getRankSuffix = (rank) => {
    if (rank === 1) return "1st";
    if (rank === 2) return "2nd";
    if (rank === 3) return "3rd";

    const lastDigit = rank % 10;
    const lastTwoDigits = rank % 100;

    if (lastDigit === 1 && lastTwoDigits !== 11) return `${rank}st`;
    if (lastDigit === 2 && lastTwoDigits !== 12) return `${rank}nd`;
    if (lastDigit === 3 && lastTwoDigits !== 13) return `${rank}rd`;

    return `${rank}th`;
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
              <div key={note.id} className="data">
                <p className="card">phone Number: {note.phoneNumber}</p>
                <p className="card">name: {note.name}</p>
                <p className="card">city: {note.city}</p>
                <p className="card">obtained Marks: {note.obtainedMarks}</p>
                <p className="card">
                  total marks:{" "}
                  {note.totalMarks || note.questionResults?.length || 0}
                </p>
                <p className="card" style={{ color: "red" }}>
                  Congratulations! you got {note.rank} position
                </p>

                {note.questionResults?.map((question, index) => {
                  const studentAnswer =
                    question.studentAnswer ||
                    question.selectedAnswer ||
                    "Not Answered";

                  const correctAnswer = question.correctAnswer;
                  const isCorrect =
                    question.isCorrect !== undefined
                      ? question.isCorrect
                      : studentAnswer === correctAnswer;

                  return (
                    <div key={index} className="questionWise">
                      <h3>Question wise result: {index + 1}</h3>
                      <p className="answers">Question: {question.question}</p>
                      <p className="answers">Your answer: {studentAnswer}</p>
                      <p className="answers">Correct Answer: {correctAnswer}</p>
                      {isCorrect ? (
                        <p className="answers">
                          <span style={{ color: "green" }}>&#10004;</span>
                        </p>
                      ) : (
                        <p className="answers">
                          <span style={{ color: "red" }}>&#10006;</span>
                        </p>
                      )}
                    </div>
                  );
                })}
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
