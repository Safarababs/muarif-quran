import React, { useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase";
import "./QuizSimple.css";

const cleanPhoneNumber = (phone) => {
  return (phone || "").trim().replace(/\s+/g, "");
};

const QuizResultPage = ({ quizId: defaultQuizId, quizTitle, resultDate }) => {
  const [quizId, setQuizId] = useState(defaultQuizId);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [result, setResult] = useState(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const isResultDay = () => {
    const today = new Date();
    const target = new Date(resultDate);
    today.setHours(0, 0, 0, 0);
    target.setHours(0, 0, 0, 0);
    return today >= target;
  };

  const fetchResult = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setMessage("");
      setResult(null);

      const cleanedPhone = cleanPhoneNumber(phoneNumber);

      if (!cleanedPhone) {
        setMessage("Phone number is required.");
        return;
      }

      const resultDocId = `${quizId}_submissions`;
      const resultRef = doc(db, "Results", resultDocId, "data", cleanedPhone);
      const resultSnap = await getDoc(resultRef);

      if (!resultSnap.exists()) {
        setMessage("Result not found.");
        return;
      }

      setResult(resultSnap.data());
    } catch (error) {
      console.error(error);
      setMessage(error.message || "Failed to fetch result.");
    } finally {
      setLoading(false);
    }
  };

  if (!isResultDay()) {
    return (
      <div className="quiz-simple-page">
        <div className="quiz-simple-container">
          <h1 className="quiz-simple-title">{quizTitle} Result</h1>
          <div className="quiz-simple-card">
            <p>Results are not available yet.</p>
            <p>
              Result Date: <strong>{resultDate}</strong>
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-simple-page">
      <div className="quiz-simple-container">
        <h1 className="quiz-simple-title">Check Result</h1>

        {message ? <div className="quiz-simple-message">{message}</div> : null}

        <div className="quiz-simple-card">
          <form onSubmit={fetchResult}>
            <div className="quiz-simple-group">
              <label>Quiz ID</label>
              <input
                type="text"
                value={quizId}
                onChange={(e) => setQuizId(e.target.value)}
                placeholder="e.g. SooratTehreem2026"
              />
            </div>

            <div className="quiz-simple-group">
              <label>Phone Number</label>
              <input
                type="text"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Enter your phone number"
              />
            </div>

            <button type="submit" disabled={loading}>
              {loading ? "Checking..." : "Check Result"}
            </button>
          </form>
        </div>

        {result && (
          <div className="quiz-simple-card">
            <h2>{result.name}</h2>
            <p>
              <strong>Phone:</strong> {result.phoneNumber}
            </p>
            <p>
              <strong>City:</strong> {result.city}
            </p>
            <p>
              <strong>Obtained Marks:</strong> {result.obtainedMarks}
            </p>
            <p>
              <strong>Total Marks:</strong> {result.totalMarks}
            </p>

            <div className="result-questions-list">
              {result.questionResults?.map((item, index) => (
                <div key={index} className="result-question-box">
                  <h3>Question {item.questionNo || index + 1}</h3>
                  <p>
                    <strong>Question:</strong> {item.question}
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
        )}
      </div>
    </div>
  );
};

export default QuizResultPage;
