import React, { useEffect, useState } from "react";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import BackendCall from "../../institute/BackendCall";
import "./ResultCard.css";
import DownloadResult from "../Results/DownloadResult";
import { db } from "../../../firebase";

function Results() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        setLoading(true);

        // 🔥 Fetch from Firebase
        const q = query(
          collection(db, "quizResults"),
          orderBy("obtainedMarks", "desc"),
        );

        const querySnapshot = await getDocs(q);

        const results = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        // 🏆 Add ranking
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

  // ✅ Correct rank suffix (1st, 2nd, 3rd, 4th, 21st...)
  const getRankSuffix = (rank) => {
    const lastDigit = rank % 10;
    const lastTwoDigits = rank % 100;

    if (lastDigit === 1 && lastTwoDigits !== 11) return `${rank}st`;
    if (lastDigit === 2 && lastTwoDigits !== 12) return `${rank}nd`;
    if (lastDigit === 3 && lastTwoDigits !== 13) return `${rank}rd`;

    return `${rank}th`;
  };

  return (
    <div className="result-card-container">
      <h1 style={{ color: "red", display: "inline" }} className="text-center">
        {notes.length} Results Found
      </h1>

      <div className="result-cards">
        {loading ? (
          <p>Loading...</p>
        ) : (
          notes.map((note) => (
            <div key={note.id} className="result-card">
              <h2>{note.name}</h2>

              <p style={{ color: "green", fontWeight: "bold" }}>
                {note.rank} position
              </p>

              <p>City: {note.city}</p>
              <p>Phone: {note.phoneNumber}</p>

              <p>Obtained Marks: {note.obtainedMarks}</p>

              <p>
                Total Marks:{" "}
                {note.totalMarks || note.questionResults?.length || 0}
              </p>

              {/* 🥇 Highlight Top 3 */}
              {note.rankNumber <= 3 && (
                <p style={{ color: "gold", fontWeight: "bold" }}>
                  🎉 Prize Winner
                </p>
              )}

              {/* 🏅 Rank 4–13 (Top 10 after top 3) */}
              {note.rankNumber > 3 && note.rankNumber <= 13 && (
                <p style={{ color: "blue" }}>⭐ Top 10 Performer</p>
              )}
            </div>
          ))
        )}
      </div>

      <BackendCall />

      {/* 📥 Download All Results */}
      <DownloadResult data={notes} />
    </div>
  );
}

export default Results;
