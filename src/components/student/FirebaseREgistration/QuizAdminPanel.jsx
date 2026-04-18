import React, { useState } from "react";
import { Link } from "react-router-dom";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../../firebase";
import "./QuizSimple.css";

const QuizAdminPanel = ({
  quizId: defaultQuizId,
  quizTitle: defaultQuizTitle,
}) => {
  const [quizId, setQuizId] = useState(defaultQuizId);
  const [quizTitle, setQuizTitle] = useState(defaultQuizTitle);
  const [studentsJson, setStudentsJson] = useState(`[
  {
    "id": 1,
    "name": "Ali",
    "phoneNumber": "03361151155",
    "city": "Lahore",
    "canAttempt": true
  }
]`);
  const [questionsJson, setQuestionsJson] = useState(`[
  {
    "questionNo": "1",
    "question": "سورۃ التحریم میں کل کتنی آیات ہیں؟",
    "options": ["10", "12", "15", "8"],
    "correctAnswer": "12"
  }
]`);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const uploadStudents = async () => {
    try {
      setLoading(true);
      setMessage("");

      const parsedStudents = JSON.parse(studentsJson);

      await setDoc(doc(db, "Students", quizId), {
        title: quizTitle,
        quizId,
        data: parsedStudents,
        totalStudents: parsedStudents.length,
        updatedAt: serverTimestamp(),
      });

      setMessage("Students uploaded successfully.");
    } catch (error) {
      console.error(error);
      setMessage(error.message || "Failed to upload students.");
    } finally {
      setLoading(false);
    }
  };

  const uploadQuestions = async () => {
    try {
      setLoading(true);
      setMessage("");

      const parsedQuestions = JSON.parse(questionsJson);

      await setDoc(doc(db, "Questions", quizId), {
        title: quizTitle,
        quizId,
        data: parsedQuestions,
        totalQuestions: parsedQuestions.length,
        updatedAt: serverTimestamp(),
      });

      setMessage("Questions uploaded successfully.");
    } catch (error) {
      console.error(error);
      setMessage(error.message || "Failed to upload questions.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="quiz-simple-page">
      <div className="quiz-simple-container">
        <h1 className="quiz-simple-title">Quiz Admin Panel</h1>

        {message ? <div className="quiz-simple-message">{message}</div> : null}

        <div className="quiz-simple-card">
          <h2>Quiz Info</h2>

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
            <label>Quiz Title</label>
            <input
              type="text"
              value={quizTitle}
              onChange={(e) => setQuizTitle(e.target.value)}
              placeholder="e.g. Soorat Tehreem 2026"
            />
          </div>
        </div>

        <div className="quiz-simple-card">
          <h2>Students JSON</h2>
          <textarea
            rows="14"
            value={studentsJson}
            onChange={(e) => setStudentsJson(e.target.value)}
          />
          <button onClick={uploadStudents} disabled={loading}>
            {loading ? "Please wait..." : "Upload Students"}
          </button>
        </div>

        <div className="quiz-simple-card">
          <h2>Questions JSON</h2>
          <textarea
            rows="14"
            value={questionsJson}
            onChange={(e) => setQuestionsJson(e.target.value)}
          />
          <button onClick={uploadQuestions} disabled={loading}>
            {loading ? "Please wait..." : "Upload Questions"}
          </button>
        </div>
        <div className="quiz-simple-card">
          <h2>All Results</h2>

          <Link to="/safarResult" className="admin-link">
            <button type="button">View Results for {quizId}</button>
          </Link>
        </div>

        <div className="quiz-simple-card">
          <h2>Instructions</h2>
          <p>
            1. Enter a new Quiz ID like <strong>SooratTehreem2026</strong>.
          </p>
          <p>
            2. Paste students JSON and click <strong>Upload Students</strong>.
          </p>
          <p>
            3. Paste questions JSON and click <strong>Upload Questions</strong>.
          </p>
          <p>
            4. In students JSON, keep <strong>canAttempt: true</strong> for
            allowed students.
          </p>
          <p>5. Student quiz page and result page must use the same Quiz ID.</p>
        </div>
      </div>
    </div>
  );
};

export default QuizAdminPanel;
