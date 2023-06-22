import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import swal from "sweetalert";
import questions from "./Questions/Question";
import BackendCall from "../institute/BackendCall";
import data from "../data";
import "./quiz.css";
import Darood from "./Darood";

const Quiz = () => {
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [userData, setUserData] = useState({
    name: "",
    phoneNumber: "",
    city: "",
  });
  const [userResults, setUserResults] = useState([]);
  const [timer, setTimer] = useState(0);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState(
    new Array(questions.length).fill(null)
  );
  const [showUserForm, setShowUserForm] = useState(true);
  const [showResults, setShowResults] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const handleUserDataChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleAnswerSelect = (event) => {
    const { value } = event.target;
    setAnswers((prevAnswers) => {
      const updatedAnswers = [...prevAnswers];
      updatedAnswers[currentQuestionIndex] = value;
      return updatedAnswers;
    });
  };

  // const handleNextClick = () => {
  //   if (showUserForm) {
  //     if (!userData.name || !userData.phoneNumber || !userData.city) {
  //       const errors = {
  //         name: !userData.name,
  //         phoneNumber: !userData.phoneNumber,
  //         city: !userData.city,
  //       };
  //       setFormErrors(errors);
  //     } else {
  //       setFormErrors({});
  //       setShowUserForm(false);
  //     }
  //   } else {
  //     if (currentQuestionIndex === shuffledQuestions.length - 1) {
  //       setShowResults(true);
  //       saveUserDataAndAnswers();
  //     } else {
  //       setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  //     }
  //   }
  // };

  const calculateMarks = useCallback(() => {
    let totalMarks = shuffledQuestions.length;
    let obtainedMarks = 0;
    let resultDetails = [];

    shuffledQuestions.forEach((question, index) => {
      const answer = answers[index];
      const isCorrect = answer === question.correctAnswer;
      if (isCorrect) {
        obtainedMarks++;
      }
      resultDetails.push({ question, answer, isCorrect });
    });

    return { totalMarks, obtainedMarks: Number(obtainedMarks), resultDetails };
  }, [shuffledQuestions, answers]);

  const saveUserDataAndAnswers = useCallback(() => {
    setIsLoading(true);
    const obtainedMarks = calculateMarks();
    const name = userData.name;
    const phoneNumber = userData.phoneNumber;
    const city = userData.city;
    const backup = { name, phoneNumber, city, obtainedMarks };

    axios.post(data.backend + "/result", backup).then((res) => {
      if (res.data.message === "Successfully sent") {
        swal("Thank you!", "Your result has been saved", "success");
        setIsLoading(false);
      } else {
        swal(
          "Please Check your internet and try again",
          "Please Check your network",
          "error"
        );
        setIsLoading(false);
      }
    });
  }, [calculateMarks, userData]);

  // timer
  useEffect(() => {
    const timerId = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  const handleNextClick = useCallback(() => {
    if (showUserForm) {
      if (!userData.name || !userData.phoneNumber || !userData.city) {
        const errors = {
          name: !userData.name,
          phoneNumber: !userData.phoneNumber,
          city: !userData.city,
        };
        setFormErrors(errors);
      } else {
        setFormErrors({});
        setShowUserForm(false);
        setTimer(questions.length * 60);
      }
    } else {
      if (currentQuestionIndex === shuffledQuestions.length - 1) {
        setShowResults(true);
        saveUserDataAndAnswers();
      } else {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      }
    }
  }, [currentQuestionIndex, saveUserDataAndAnswers, setTimer, setShowResults, setFormErrors, setShowUserForm, shuffledQuestions.length, userData.city, userData.name, userData.phoneNumber, showUserForm]);
  
  useEffect(() => {
    if (timer === 0) {
      handleNextClick();
    }
  }, [handleNextClick, timer]);
  
  
  
  

  const handleBackClick = () => {
    if (currentQuestionIndex === 0) {
      return;
    }
    setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
  };

  



  const checkIfUserAlreadyCompletedQuiz = useCallback(() => {
    const name = userData.name;
    const phoneNumber = userData.phoneNumber;
    const city = userData.city;

    axios.get(data.backend + "/results").then((res) => {
      if (res.data && res.data.length > 0) {
        const existingResults = res.data.filter(
          (result) =>
            result.name === name &&
            result.phoneNumber === phoneNumber &&
            result.city === city
        );
        setUserResults(existingResults);
        if (existingResults.length > 0) {
          setShowUserForm(false);
          setShowResults(true);
        }
      }
    });
  }, [userData]);
  

  // shuffled question
  useEffect(() => {
    const shuffledArray = questions.map((question) => {
      return {
        ...question,
        options: [...question.options], // Create a new array to keep the options unchanged
      };
    });
    setShuffledQuestions(shuffledArray);
  }, []);

  useEffect(() => {
    if (!showUserForm) {
      checkIfUserAlreadyCompletedQuiz();
    }
  }, [showUserForm, checkIfUserAlreadyCompletedQuiz]);

  return (
    <section className="quiz">
    
    <div className="quiz-container" style={{ marginTop: "7rem" }}>
    
      {showUserForm ?  (
        <div className="form-group">
        <h1 className="heading">
        <span>Muarif Quranic Quiz Competition</span>
      </h1>
          <BackendCall />
          <input
            type="text"
            name="name"
            value={userData.name}
            onChange={handleUserDataChange}
            placeholder={formErrors.name ? "Name is required" : "Name"}
            className={formErrors.name ? "error" : ""}
          />
          <input
            type="text"
            name="phoneNumber"
            value={userData.phoneNumber}
            onChange={handleUserDataChange}
            placeholder={
              formErrors.phoneNumber
                ? "Phone Number is required"
                : "Phone Number"
            }
            className={formErrors.phoneNumber ? "error" : ""}
          />
          <input
            type="text"
            name="city"
            value={userData.city}
            onChange={handleUserDataChange}
            placeholder={formErrors.city ? "City is required" : "City"}
            className={formErrors.city ? "error" : ""}
          />
          <button onClick={handleNextClick} className="btn">Start Quiz</button>
        </div>
      ) : showResults ? (
        <div className="results">
        <Darood />
          {userResults.length > 0 ? (
            <p style={{ color: "red", background: "white" }}>
              You have already completed the quiz. Please wait for the results.
            </p>
          ) : (
            <>
            
              <p>Name: {userData.name}</p>
              <p>Phone Number: {userData.phoneNumber}</p>
              <p>City: {userData.city}</p>
              <p>Total Marks: {calculateMarks().totalMarks}</p>
              <p>Obtained Marks: {calculateMarks().obtainedMarks}</p>
            
              <h3 style={{ color: "white" }}>Question-wise Results:</h3>
              {calculateMarks().resultDetails.map((result, index) => (
                <div key={index}>
                  <p
                    style={{
                      color: "black",
                      fontSize: "2rem",
                      fontFamily:"Noto Nastaliq Urdu"
                    }}
                  >
                    Question {index + 1}:<br></br> {result.question.question}
                  </p>
                  <p className="answers">
                    Correct Answer: {result.question.correctAnswer}
                  </p>
                  <p className="answers">Your Answer: {result.answer}</p>

                  {result.isCorrect ? (
                    <p className="answers">
                      Correct Answer:{" "}
                      <span style={{ color: "green" }}>&#10004;</span>
                    </p>
                  ) : (
                    <p className="answers">
                      Wrong Answer:{" "}
                      <span
                        style={{
                          color: "red",
                        }}
                      >
                        &#10006;
                      </span>
                    </p>
                  )}
                </div>
              ))}
            </>
          )}
        </div>
      ) : (
        <div className="question-container">
        <h1>Hi {userData.name}!</h1>
        {!showUserForm && !showResults && (
        <div className="timer">
          {timer > 0 ? (
            <h1 className="heading">
            <span>Time Remaining: {Math.floor(timer / 60)}:{timer % 60}</span>
            </h1>
          ) : (
            <h1>Time's Up!</h1>
          )}
        </div>
      )}
          <h1>Question no {currentQuestionIndex + 1}</h1>
          <div className="question">
            <h2>{shuffledQuestions[currentQuestionIndex].question}</h2>
            <BackendCall />
            <ul>
              {shuffledQuestions[currentQuestionIndex].options.map((option) => (
                <li>
                  <label>
                    <input
                      type="radio"
                      name="option"
                      value={option}
                      onChange={handleAnswerSelect}
                      checked={answers[currentQuestionIndex] === option}
                      style={{ textAlign: "right" }}
                    />
                    {option}
                  </label>
                </li>
              ))}
            </ul>
          </div>
          <div className="navigation-buttons">
            {currentQuestionIndex > 0 && (
              <button onClick={handleBackClick} className="back">
                Back
              </button>
            )}
            <button onClick={handleNextClick} className="next">
              {currentQuestionIndex === shuffledQuestions.length - 1
                ? "Submit"
                : "Next"}
            </button>
          </div>
        </div>
      )}
      {isLoading && <div className="loading">Saving results...</div>}
    </div>
    </section>
  );
};

export default Quiz;
