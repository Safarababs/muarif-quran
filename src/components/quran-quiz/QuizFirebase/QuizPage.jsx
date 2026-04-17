import React, { useEffect, useState } from "react";
import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../../firebase";
import QuizEligibilityChecker from "./QuizEligibilityChecker";

const shuffleArray = (array) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

const QuizPage = () => {
  const sooratName = "SooratTehreem";

  const [approvedStudent, setApprovedStudent] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const questionsRef = doc(db, "Questions", sooratName);
        const questionsSnap = await getDoc(questionsRef);

        if (!questionsSnap.exists()) {
          return;
        }

        const data = questionsSnap.data().data || [];
        setQuestions(data);

        const shuffled = shuffleArray(data);
        setShuffledQuestions(shuffled);
        setAnswers(new Array(shuffled.length).fill(null));
      } catch (error) {
        console.error(error);
      }
    };

    fetchQuestions();
  }, []);

  const handleApproved = async (studentData) => {
    const resultRef = doc(
      db,
      "QuizResults",
      sooratName,
      "submissions",
      studentData.phoneNumber,
    );

    const resultSnap = await getDoc(resultRef);

    if (resultSnap.exists()) {
      alert("You already submitted this quiz.");
      return;
    }

    setApprovedStudent(studentData);
    setShowQuiz(true);
  };

  const handleAnswerSelect = (value) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestionIndex] = value;
    setAnswers(updatedAnswers);
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);

      let obtainedMarks = 0;

      const questionResults = shuffledQuestions.map((question, index) => {
        const studentAnswer = answers[index];
        const isCorrect = studentAnswer === question.correctAnswer;

        if (isCorrect) obtainedMarks++;

        return {
          questionNo: question.questionNo || String(index + 1),
          question: question.question,
          correctAnswer: question.correctAnswer,
          studentAnswer: studentAnswer || "",
          isCorrect,
        };
      });

      const payload = {
        name: approvedStudent.name,
        phoneNumber: approvedStudent.phoneNumber,
        city: approvedStudent.city || "",
        obtainedMarks,
        totalMarks: shuffledQuestions.length,
        questionResults,
        submittedAt: serverTimestamp(),
      };

      const resultRef = doc(
        db,
        "QuizResults",
        sooratName,
        "submissions",
        approvedStudent.phoneNumber,
      );

      await setDoc(resultRef, payload);

      alert("Quiz submitted successfully!");
      setShowQuiz(false);
    } catch (error) {
      console.error(error);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (!showQuiz) {
    return (
      <QuizEligibilityChecker
        sooratName={sooratName}
        onApproved={handleApproved}
      />
    );
  }

  const currentQuestion = shuffledQuestions[currentQuestionIndex];

  return (
    <div style={{ padding: "20px" }}>
      <h2>Quiz: {sooratName}</h2>
      <h3>Welcome {approvedStudent?.name}</h3>

      {currentQuestion && (
        <>
          <h4>
            Question {currentQuestionIndex + 1}: {currentQuestion.question}
          </h4>

          <ul>
            {currentQuestion.options.map((option, index) => (
              <li key={index}>
                <label>
                  <input
                    type="radio"
                    name="option"
                    value={option}
                    checked={answers[currentQuestionIndex] === option}
                    onChange={() => handleAnswerSelect(option)}
                  />
                  {option}
                </label>
              </li>
            ))}
          </ul>

          <div style={{ marginTop: "20px" }}>
            {currentQuestionIndex > 0 && (
              <button onClick={() => setCurrentQuestionIndex((p) => p - 1)}>
                Back
              </button>
            )}

            {currentQuestionIndex < shuffledQuestions.length - 1 ? (
              <button
                onClick={() => setCurrentQuestionIndex((p) => p + 1)}
                style={{ marginLeft: "10px" }}
              >
                Next
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={loading}
                style={{ marginLeft: "10px" }}
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default QuizPage;
