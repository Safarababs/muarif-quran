import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";
import "./QuizSimple.css";

const AdminResultsPage = ({ quizId, quizTitle }) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchResults = async () => {
      try {
        setLoading(true);
        setMessage("");

        const resultDocId = `${quizId}_submissions`;
        const resultsRef = collection(db, "Results", resultDocId, "data");
        const snapshot = await getDocs(resultsRef);

        const fetchedResults = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        fetchedResults.sort((a, b) => {
          if ((b.obtainedMarks || 0) !== (a.obtainedMarks || 0)) {
            return (b.obtainedMarks || 0) - (a.obtainedMarks || 0);
          }
          return (a.name || "").localeCompare(b.name || "");
        });

        setResults(fetchedResults);
      } catch (error) {
        console.error("Error fetching admin results:", error);
        setMessage(error.message || "Failed to load results.");
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [quizId]);

  return (
    <div className="quiz-simple-page">
      <div className="quiz-simple-container">
        <h1 className="quiz-simple-title">All Results - {quizTitle}</h1>

        {message ? <div className="quiz-simple-message">{message}</div> : null}

        {loading ? (
          <div className="quiz-simple-card">
            <p>Loading results...</p>
          </div>
        ) : results.length === 0 ? (
          <div className="quiz-simple-card">
            <p>No results found for this quiz.</p>
          </div>
        ) : (
          <div className="results-cards-grid">
            {results.map((result, index) => (
              <div key={result.id} className="admin-result-card">
                <div className="admin-result-rank">Rank #{index + 1}</div>

                <h2>{result.name || "No Name"}</h2>

                <p>
                  <strong>Phone:</strong> {result.phoneNumber}
                </p>
                <p>
                  <strong>City:</strong> {result.city || "-"}
                </p>
                <p>
                  <strong>Obtained Marks:</strong> {result.obtainedMarks ?? 0}
                </p>
                <p>
                  <strong>Total Marks:</strong> {result.totalMarks ?? 0}
                </p>
                <p>
                  <strong>Submitted:</strong>{" "}
                  {result.submittedAt?.seconds
                    ? new Date(
                        result.submittedAt.seconds * 1000,
                      ).toLocaleString()
                    : "N/A"}
                </p>

                <div className="admin-result-questions">
                  <h3>Question-wise Result</h3>

                  {result.questionResults?.map((item, qIndex) => (
                    <div key={qIndex} className="admin-result-question-box">
                      <p>
                        <strong>Q{item.questionNo || qIndex + 1}:</strong>{" "}
                        {item.question}
                      </p>
                      <p>
                        <strong>Your Answer:</strong>{" "}
                        {item.studentAnswer || "Not Answered"}
                      </p>
                      <p>
                        <strong>Correct Answer:</strong> {item.correctAnswer}
                      </p>
                      <p>
                        <strong>Status:</strong>{" "}
                        <span
                          className={
                            item.isCorrect ? "right-answer" : "wrong-answer"
                          }
                        >
                          {item.isCorrect ? "Right" : "Wrong"}
                        </span>
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminResultsPage;
