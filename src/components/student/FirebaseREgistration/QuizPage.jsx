import React, { useCallback, useEffect, useState } from "react";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "../../../firebase";
import "./QuizSimple.css";

const shuffleArray = (array) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

const cleanPhoneNumber = (phone) => {
  return (phone || "").trim().replace(/\s+/g, "");
};

const QuizPage = ({ quizId: defaultQuizId, quizTitle, quizDate }) => {
  const [quizId, setQuizId] = useState(defaultQuizId);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [student, setStudent] = useState(null);

  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [checked, setChecked] = useState(false);
  const [canStart, setCanStart] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [timer, setTimer] = useState(0);

  const isQuizDay = () => {
    const today = new Date();
    const target = new Date(quizDate);
    today.setHours(0, 0, 0, 0);
    target.setHours(0, 0, 0, 0);
    return today.getTime() === target.getTime();
  };

  const fetchEligibilityAndQuestions = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setMessage("");
      setChecked(false);
      setStudent(null);
      setCanStart(false);

      const cleanedPhone = cleanPhoneNumber(phoneNumber);

      if (!cleanedPhone) {
        setMessage("Phone number is required.");
        return;
      }

      const studentsRef = doc(db, "Students", quizId);
      const studentsSnap = await getDoc(studentsRef);

      if (!studentsSnap.exists()) {
        setMessage("Students data not found for this quiz.");
        return;
      }

      const studentsData = studentsSnap.data().data || [];
      const foundStudent = studentsData.find(
        (item) => cleanPhoneNumber(item.phoneNumber) === cleanedPhone,
      );

      setChecked(true);

      if (!foundStudent) {
        setMessage("Student not found.");
        return;
      }

      if (!foundStudent.canAttempt) {
        setStudent(foundStudent);
        setMessage("You are not allowed to attempt this quiz.");
        return;
      }

      const resultDocId = `${quizId}_submissions`;
      const existingResultRef = doc(
        db,
        "Results",
        resultDocId,
        "data",
        cleanedPhone,
      );
      const existingResultSnap = await getDoc(existingResultRef);

      if (existingResultSnap.exists()) {
        setStudent(foundStudent);
        setMessage("You have already submitted this quiz.");
        return;
      }

      const questionsRef = doc(db, "Questions", quizId);
      const questionsSnap = await getDoc(questionsRef);

      if (!questionsSnap.exists()) {
        setMessage("Questions not found for this quiz.");
        return;
      }

      const questionsData = questionsSnap.data().data || [];
      const shuffled = shuffleArray(
        questionsData.map((item) => ({
          ...item,
          options: Array.isArray(item.options) ? [...item.options] : [],
        })),
      );

      setStudent(foundStudent);

      setShuffledQuestions(shuffled);
      setAnswers(new Array(shuffled.length).fill(null));
      setTimer(shuffled.length * 60);
      setCanStart(true);
      setMessage("Eligible. You can start the quiz.");
    } catch (error) {
      console.error(error);
      setMessage(error.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const handleStartQuiz = () => {
    setShowQuiz(true);
  };

  const handleAnswerSelect = (event) => {
    const { value } = event.target;
    setAnswers((prev) => {
      const updated = [...prev];
      updated[currentQuestionIndex] = value;
      return updated;
    });
  };

  const calculateMarks = useCallback(() => {
    let obtainedMarks = 0;

    shuffledQuestions.forEach((question, index) => {
      if (answers[index] === question.correctAnswer) {
        obtainedMarks++;
      }
    });

    return {
      totalMarks: shuffledQuestions.length,
      obtainedMarks,
    };
  }, [shuffledQuestions, answers]);

  const handleSubmit = useCallback(async () => {
    try {
      setLoading(true);
      setMessage("");

      const cleanedPhone = cleanPhoneNumber(phoneNumber);
      const { obtainedMarks, totalMarks } = calculateMarks();

      const questionResults = shuffledQuestions.map((question, index) => {
        const studentAnswer = answers[index];
        const isCorrect = studentAnswer === question.correctAnswer;

        return {
          questionNo: question.questionNo || String(index + 1),
          question: question.question,
          options: question.options,
          correctAnswer: question.correctAnswer,
          studentAnswer: studentAnswer || "",
          isCorrect,
          isWrong: !isCorrect,
        };
      });

      const resultDocId = `${quizId}_submissions`;

      await setDoc(doc(db, "Results", resultDocId, "data", cleanedPhone), {
        quizId,
        name: student.name || "",
        phoneNumber: cleanedPhone,
        city: student.city || "",
        obtainedMarks,
        totalMarks,
        questionResults,
        submittedAt: serverTimestamp(),
      });

      setShowQuiz(false);
      setCanStart(false);
      setMessage("Quiz submitted successfully.");
    } catch (error) {
      console.error(error);
      setMessage(error.message || "Failed to submit quiz.");
    } finally {
      setLoading(false);
    }
  }, [
    answers,
    shuffledQuestions,
    phoneNumber,
    student,
    quizId,
    calculateMarks,
  ]);

  useEffect(() => {
    const timerId = setInterval(() => {
      setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  useEffect(() => {
    if (timer === 0 && showQuiz && shuffledQuestions.length > 0) {
      handleSubmit();
    }
  }, [timer, showQuiz, shuffledQuestions.length, handleSubmit]);
  if (!isQuizDay()) {
    return (
      <div className="quiz-simple-page">
        <div className="quiz-simple-container">
          <h1 className="quiz-simple-title">{quizTitle}</h1>
          <div className="quiz-simple-card">
            <p>Quiz is not active today.</p>
            <p>
              Quiz Date: <strong>{quizDate}</strong>
            </p>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="quiz-simple-page">
      <div className="quiz-simple-container">
        <h1 className="quiz-simple-title">Start Quiz</h1>

        {message ? <div className="quiz-simple-message">{message}</div> : null}

        {!showQuiz ? (
          <div className="quiz-simple-card">
            <form onSubmit={fetchEligibilityAndQuestions}>
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
                {loading ? "Checking..." : "Check Eligibility"}
              </button>
            </form>

            {checked && student && (
              <div className="quiz-simple-student-box">
                <p>
                  <strong>Name:</strong> {student.name}
                </p>
                <p>
                  <strong>Phone:</strong> {student.phoneNumber}
                </p>
                <p>
                  <strong>City:</strong> {student.city}
                </p>
                <p>
                  <strong>Status:</strong>{" "}
                  {student.canAttempt ? "Eligible" : "Not Allowed"}
                </p>
              </div>
            )}

            {canStart && (
              <button onClick={handleStartQuiz} className="secondary-btn">
                Start Quiz
              </button>
            )}
          </div>
        ) : (
          <div className="quiz-simple-card">
            <h2>Hi {student?.name}</h2>

            <div className="quiz-simple-timer">
              Time Remaining: {Math.floor(timer / 60)}:
              {String(timer % 60).padStart(2, "0")}
            </div>

            <h3>
              Question {currentQuestionIndex + 1} of {shuffledQuestions.length}
            </h3>

            <p className="quiz-question-text">
              {shuffledQuestions[currentQuestionIndex]?.question}
            </p>

            <ul className="quiz-options-list">
              {shuffledQuestions[currentQuestionIndex]?.options?.map(
                (option, index) => (
                  <li key={index}>
                    <label>
                      <input
                        type="radio"
                        name="option"
                        value={option}
                        checked={answers[currentQuestionIndex] === option}
                        onChange={handleAnswerSelect}
                      />
                      {option}
                    </label>
                  </li>
                ),
              )}
            </ul>

            <div className="quiz-nav-buttons">
              {currentQuestionIndex > 0 && (
                <button
                  onClick={() => setCurrentQuestionIndex((prev) => prev - 1)}
                >
                  Back
                </button>
              )}

              {currentQuestionIndex < shuffledQuestions.length - 1 ? (
                <button
                  onClick={() => setCurrentQuestionIndex((prev) => prev + 1)}
                >
                  Next
                </button>
              ) : (
                <button onClick={handleSubmit} disabled={loading}>
                  {loading ? "Submitting..." : "Submit Quiz"}
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizPage;
