// import React, { useState, useEffect, useCallback } from "react";
// import swal from "sweetalert";
// import { serverTimestamp, doc, getDoc, setDoc } from "firebase/firestore";
// import questions from "./Questions/Question";
// import BackendCall from "../institute/BackendCall";
// import "./quiz.css";
// import Darood from "./Darood";
// import { db } from "../../firebase";

// const RESULT_DAY = "2026-04-13";

// const normalizePhoneNumber = (phone) => {
//   if (!phone) return "";

//   let cleaned = phone.replace(/\s+/g, "").replace(/-/g, "");

//   if (cleaned.startsWith("+92")) {
//     cleaned = "0" + cleaned.slice(3);
//   }

//   cleaned = cleaned.replace(/[^\d]/g, "");
//   return cleaned;
// };

// const isValidPhoneNumber = (phone) => {
//   const normalized = normalizePhoneNumber(phone);
//   return /^[0-9]{10,13}$/.test(normalized);
// };

// const shuffleArray = (array) => {
//   const newArray = [...array];
//   for (let i = newArray.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
//   }
//   return newArray;
// };

// const getSubmissionKey = (phone) =>
//   `quiz_submitted_${normalizePhoneNumber(phone)}`;

// const Quiz = () => {
//   const [shuffledQuestions, setShuffledQuestions] = useState([]);
//   const [userData, setUserData] = useState({
//     name: "",
//     phoneNumber: "",
//     city: "",
//   });
//   const [userResults, setUserResults] = useState([]);
//   const [timer, setTimer] = useState(0);

//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [answers, setAnswers] = useState(
//     new Array(questions.length).fill(null),
//   );
//   const [showUserForm, setShowUserForm] = useState(true);
//   const [showResults, setShowResults] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [formErrors, setFormErrors] = useState({});
//   const [submittedResult, setSubmittedResult] = useState(null);

//   const isResultDay = () => {
//     const today = new Date();
//     const resultDate = new Date(RESULT_DAY);
//     today.setHours(0, 0, 0, 0);
//     resultDate.setHours(0, 0, 0, 0);
//     return today >= resultDate;
//   };

//   const handleUserDataChange = (event) => {
//     const { name, value } = event.target;
//     setUserData((prevData) => ({
//       ...prevData,
//       [name]: name === "phoneNumber" ? normalizePhoneNumber(value) : value,
//     }));
//   };

//   const handleAnswerSelect = (event) => {
//     const { value } = event.target;
//     setAnswers((prevAnswers) => {
//       const updatedAnswers = [...prevAnswers];
//       updatedAnswers[currentQuestionIndex] = value;
//       return updatedAnswers;
//     });
//   };

//   const calculateMarks = useCallback(() => {
//     let totalMarks = shuffledQuestions.length;
//     let obtainedMarks = 0;

//     shuffledQuestions.forEach((question, index) => {
//       const answer = answers[index];
//       if (answer === question.correctAnswer) {
//         obtainedMarks++;
//       }
//     });

//     return { totalMarks, obtainedMarks: Number(obtainedMarks) };
//   }, [shuffledQuestions, answers]);

//   const buildQuestionResults = useCallback(() => {
//     return shuffledQuestions.map((question, index) => {
//       const studentAnswer = answers[index];
//       const isCorrect = studentAnswer === question.correctAnswer;

//       return {
//         questionNo: index + 1,
//         question: question.question,
//         options: question.options,
//         correctAnswer: question.correctAnswer,
//         studentAnswer: studentAnswer || "",
//         isCorrect,
//         isWrong: !isCorrect,
//       };
//     });
//   }, [shuffledQuestions, answers]);

//   const checkRegisteredUser = useCallback(async () => {
//     try {
//       const phoneNumber = normalizePhoneNumber(userData.phoneNumber);

//       if (!phoneNumber) {
//         swal("Error", "Phone number is required", "error");
//         return false;
//       }

//       if (!isValidPhoneNumber(phoneNumber)) {
//         swal("Invalid Phone", "Enter a valid phone number", "error");
//         return false;
//       }

//       const allowedUserRef = doc(db, "allowedUsers", phoneNumber);
//       const allowedUserSnap = await getDoc(allowedUserRef);

//       if (!allowedUserSnap.exists()) {
//         swal(
//           "Not Registered",
//           "This phone number is not in the registered students list.",
//           "error",
//         );
//         return false;
//       }

//       return true;
//     } catch (error) {
//       console.error("Error checking registered user:", error);
//       swal("Error", error.message || "Could not verify registration", "error");
//       return false;
//     }
//   }, [userData.phoneNumber]);

//   const checkIfUserAlreadyCompletedQuiz = useCallback(async () => {
//     try {
//       const phoneNumber = normalizePhoneNumber(userData.phoneNumber);

//       if (!phoneNumber) {
//         swal("Error", "Phone number is required", "error");
//         return;
//       }

//       const storageKey = getSubmissionKey(phoneNumber);
//       const localSubmitted = localStorage.getItem(storageKey);

//       const docRef = doc(db, "quizResults", phoneNumber);
//       const docSnap = await getDoc(docRef);

//       if (localSubmitted || docSnap.exists()) {
//         const existingResult = docSnap.exists()
//           ? {
//               id: docSnap.id,
//               ...docSnap.data(),
//             }
//           : null;

//         if (existingResult) {
//           setUserResults([existingResult]);
//         }

//         setShowUserForm(false);
//         setShowResults(true);

//         swal(
//           "Already Submitted",
//           "This phone number has already submitted the quiz.",
//           "error",
//         );
//       } else {
//         setUserResults([]);
//         setShowUserForm(false);
//         setTimer(questions.length * 60);
//       }
//     } catch (error) {
//       console.error("Error checking existing result:", error);
//       swal(
//         "Error",
//         error.message || "Could not verify previous submission",
//         "error",
//       );
//     }
//   }, [userData.phoneNumber]);

//   const saveUserDataAndAnswers = useCallback(async () => {
//     try {
//       setIsLoading(true);

//       const phoneNumber = normalizePhoneNumber(userData.phoneNumber);
//       const storageKey = getSubmissionKey(phoneNumber);

//       const docRef = doc(db, "quizResults", phoneNumber);
//       const docSnap = await getDoc(docRef);

//       if (localStorage.getItem(storageKey) || docSnap.exists()) {
//         const existingResult = docSnap.exists()
//           ? {
//               id: docSnap.id,
//               ...docSnap.data(),
//             }
//           : null;

//         if (existingResult) {
//           setUserResults([existingResult]);
//         }

//         setSubmittedResult(null);
//         setShowResults(true);
//         setIsLoading(false);

//         swal(
//           "Already Submitted",
//           "This phone number has already submitted the quiz.",
//           "error",
//         );
//         return;
//       }

//       const { obtainedMarks, totalMarks } = calculateMarks();
//       const questionResults = buildQuestionResults();

//       const payload = {
//         name: userData.name.trim(),
//         phoneNumber,
//         city: userData.city.trim(),
//         obtainedMarks,
//         totalMarks,
//         questionResults,
//         resultDay: RESULT_DAY,
//         submittedAt: serverTimestamp(),
//       };

//       await setDoc(docRef, payload);

//       localStorage.setItem(storageKey, "true");

//       setSubmittedResult({
//         id: phoneNumber,
//         ...payload,
//       });

//       setIsLoading(false);
//     } catch (error) {
//       console.error("Error saving result:", error);
//       setIsLoading(false);
//       swal("Error", error.message || "Could not save quiz result", "error");
//     }
//   }, [calculateMarks, buildQuestionResults, userData]);

//   useEffect(() => {
//     const shuffledArray = shuffleArray(
//       questions.map((question) => ({
//         ...question,
//         options: [...question.options],
//       })),
//     );

//     setShuffledQuestions(shuffledArray);
//   }, []);

//   useEffect(() => {
//     const timerId = setInterval(() => {
//       setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
//     }, 1000);

//     return () => clearInterval(timerId);
//   }, []);

//   useEffect(() => {
//     const disableContextMenu = (e) => e.preventDefault();
//     const disableCopyActions = (e) => {
//       if (!showUserForm && !showResults) {
//         e.preventDefault();
//       }
//     };

//     document.addEventListener("contextmenu", disableContextMenu);
//     document.addEventListener("copy", disableCopyActions);
//     document.addEventListener("cut", disableCopyActions);
//     document.addEventListener("paste", disableCopyActions);

//     return () => {
//       document.removeEventListener("contextmenu", disableContextMenu);
//       document.removeEventListener("copy", disableCopyActions);
//       document.removeEventListener("cut", disableCopyActions);
//       document.removeEventListener("paste", disableCopyActions);
//     };
//   }, [showUserForm, showResults]);

//   const handleNextClick = useCallback(async () => {
//     if (showUserForm) {
//       if (!userData.name || !userData.phoneNumber || !userData.city) {
//         const errors = {
//           name: !userData.name,
//           phoneNumber: !userData.phoneNumber,
//           city: !userData.city,
//         };
//         setFormErrors(errors);
//         return;
//       }

//       if (!isValidPhoneNumber(userData.phoneNumber)) {
//         setFormErrors((prev) => ({
//           ...prev,
//           phoneNumber: true,
//         }));
//         swal("Invalid Phone", "Enter a valid phone number", "error");
//         return;
//       }

//       setFormErrors({});

//       const isRegistered = await checkRegisteredUser();
//       if (!isRegistered) return;

//       await checkIfUserAlreadyCompletedQuiz();
//     } else {
//       if (currentQuestionIndex === shuffledQuestions.length - 1) {
//         setShowResults(true);
//         await saveUserDataAndAnswers();
//       } else {
//         setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
//       }
//     }
//   }, [
//     showUserForm,
//     userData,
//     currentQuestionIndex,
//     shuffledQuestions.length,
//     saveUserDataAndAnswers,
//     checkIfUserAlreadyCompletedQuiz,
//     checkRegisteredUser,
//   ]);

//   useEffect(() => {
//     if (
//       timer === 0 &&
//       !showUserForm &&
//       !showResults &&
//       shuffledQuestions.length > 0
//     ) {
//       handleNextClick();
//     }
//   }, [
//     timer,
//     showUserForm,
//     showResults,
//     shuffledQuestions.length,
//     handleNextClick,
//   ]);

//   const handleBackClick = () => {
//     if (currentQuestionIndex === 0) return;
//     setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
//   };

//   const detailedResult = submittedResult || userResults[0] || null;

//   return (
//     <section className="quiz">
//       <div className="quiz-container" style={{ marginTop: "7rem" }}>
//         {showUserForm ? (
//           <div className="form-group">
//             <h1 className="heading">
//               <span>Muarif Quranic Quiz Competition</span>
//             </h1>
//             <BackendCall />

//             <input
//               type="text"
//               name="name"
//               value={userData.name}
//               onChange={handleUserDataChange}
//               onPaste={(e) => e.preventDefault()}
//               onCopy={(e) => e.preventDefault()}
//               onCut={(e) => e.preventDefault()}
//               placeholder={formErrors.name ? "Name is required" : "Name"}
//               className={formErrors.name ? "error" : ""}
//             />

//             <input
//               type="text"
//               name="phoneNumber"
//               value={userData.phoneNumber}
//               onChange={handleUserDataChange}
//               onPaste={(e) => e.preventDefault()}
//               onCopy={(e) => e.preventDefault()}
//               onCut={(e) => e.preventDefault()}
//               placeholder={
//                 formErrors.phoneNumber
//                   ? "Valid Phone Number is required"
//                   : "Phone Number"
//               }
//               className={formErrors.phoneNumber ? "error" : ""}
//             />

//             <input
//               type="text"
//               name="city"
//               value={userData.city}
//               onChange={handleUserDataChange}
//               onPaste={(e) => e.preventDefault()}
//               onCopy={(e) => e.preventDefault()}
//               onCut={(e) => e.preventDefault()}
//               placeholder={formErrors.city ? "City is required" : "City"}
//               className={formErrors.city ? "error" : ""}
//             />

//             <button
//               onClick={handleNextClick}
//               className="btn"
//               disabled={isLoading}
//             >
//               {isLoading ? "Please wait..." : "Start Quiz"}
//             </button>
//           </div>
//         ) : showResults ? (
//           <div className="results">
//             <Darood />

//             {userResults.length > 0 && !submittedResult ? (
//               <>
//                 <p style={{ color: "red", background: "white" }}>
//                   You have already completed the quiz.
//                 </p>

//                 <p>Name: {userResults[0]?.name}</p>
//                 <p>Phone Number: {userResults[0]?.phoneNumber}</p>
//                 <p>City: {userResults[0]?.city}</p>
//                 <p>Total Marks: {userResults[0]?.totalMarks}</p>
//                 <p>Obtained Marks: {userResults[0]?.obtainedMarks}</p>

//                 {!isResultDay() ? (
//                   <p style={{ color: "white", background: "red" }}>
//                     Detailed result will be shown on result day
//                   </p>
//                 ) : (
//                   <>
//                     <p style={{ color: "white", background: "green" }}>
//                       Detailed result is now available
//                     </p>

//                     {userResults[0]?.questionResults?.map((result, index) => (
//                       <div key={index}>
//                         <p
//                           style={{
//                             color: "black",
//                             fontSize: "2rem",
//                             fontFamily: "Noto Nastaliq Urdu",
//                           }}
//                         >
//                           Question {result.questionNo}:<br />
//                           {result.question}
//                         </p>
//                         <p className="answers">
//                           Correct Answer: {result.correctAnswer}
//                         </p>
//                         <p className="answers">
//                           Your Answer: {result.studentAnswer || "Not Answered"}
//                         </p>

//                         {result.isCorrect ? (
//                           <p className="answers">
//                             Correct Answer:{" "}
//                             <span style={{ color: "green" }}>&#10004;</span>
//                           </p>
//                         ) : (
//                           <p className="answers">
//                             Wrong Answer:{" "}
//                             <span style={{ color: "red" }}>&#10006;</span>
//                           </p>
//                         )}
//                       </div>
//                     ))}
//                   </>
//                 )}
//               </>
//             ) : (
//               <>
//                 <p>Name: {userData.name}</p>
//                 <p>Phone Number: {userData.phoneNumber}</p>
//                 <p>City: {userData.city}</p>
//                 <p>Total Marks: {calculateMarks().totalMarks}</p>
//                 <p>Obtained Marks: {calculateMarks().obtainedMarks}</p>

//                 {!isResultDay() ? (
//                   <p style={{ color: "white", background: "red" }}>
//                     Detailed result will be shown on result day
//                   </p>
//                 ) : (
//                   <>
//                     <p style={{ color: "white", background: "green" }}>
//                       Detailed result is now available
//                     </p>

//                     {detailedResult?.questionResults?.map((result, index) => (
//                       <div key={index}>
//                         <p
//                           style={{
//                             color: "black",
//                             fontSize: "2rem",
//                             fontFamily: "Noto Nastaliq Urdu",
//                           }}
//                         >
//                           Question {result.questionNo}:<br />
//                           {result.question}
//                         </p>
//                         <p className="answers">
//                           Correct Answer: {result.correctAnswer}
//                         </p>
//                         <p className="answers">
//                           Your Answer: {result.studentAnswer || "Not Answered"}
//                         </p>

//                         {result.isCorrect ? (
//                           <p className="answers">
//                             Correct Answer:{" "}
//                             <span style={{ color: "green" }}>&#10004;</span>
//                           </p>
//                         ) : (
//                           <p className="answers">
//                             Wrong Answer:{" "}
//                             <span style={{ color: "red" }}>&#10006;</span>
//                           </p>
//                         )}
//                       </div>
//                     ))}
//                   </>
//                 )}
//               </>
//             )}
//           </div>
//         ) : (
//           <div className="question-container">
//             <h1>Hi {userData.name}!</h1>

//             {!showUserForm && !showResults && (
//               <div className="timer">
//                 {timer > 0 ? (
//                   <h1>
//                     Time Remaining: {Math.floor(timer / 60)}:
//                     {String(timer % 60).padStart(2, "0")}
//                   </h1>
//                 ) : (
//                   <h1>Time's Up!</h1>
//                 )}
//               </div>
//             )}

//             <h1>Question no {currentQuestionIndex + 1}</h1>

//             <div className="question">
//               <h2>{shuffledQuestions[currentQuestionIndex]?.question}</h2>
//               <BackendCall />
//               <ul>
//                 {shuffledQuestions[currentQuestionIndex]?.options?.map(
//                   (option, index) => (
//                     <li key={index}>
//                       <label>
//                         <input
//                           type="radio"
//                           name="option"
//                           value={option}
//                           onChange={handleAnswerSelect}
//                           checked={answers[currentQuestionIndex] === option}
//                         />
//                         {option}
//                       </label>
//                     </li>
//                   ),
//                 )}
//               </ul>
//             </div>

//             <div className="navigation-buttons">
//               {currentQuestionIndex > 0 && (
//                 <button
//                   onClick={handleBackClick}
//                   className="back"
//                   disabled={isLoading}
//                 >
//                   Back
//                 </button>
//               )}

//               <button
//                 onClick={handleNextClick}
//                 className="next"
//                 disabled={isLoading}
//               >
//                 {isLoading
//                   ? "Submitting..."
//                   : currentQuestionIndex === shuffledQuestions.length - 1
//                     ? "Submit"
//                     : "Next"}
//               </button>
//             </div>
//           </div>
//         )}

//         {isLoading && <div className="loading">Saving results...</div>}
//       </div>
//     </section>
//   );
// };

// export default Quiz;

import students from "../../registered_students.json";

const Quiz = () => {
  // filter only allowed students
  const allowedStudents = students.filter((student) => student.canAttempt);

  return (
    <div>
      <h1>Quran Quiz</h1>

      <table border="1" style={{ width: "100%", textAlign: "center" }}>
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Student Name</th>
            <th>Phone Number</th>
          </tr>
        </thead>

        <tbody>
          {allowedStudents.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.canAttempt ? "Eligible" : "Not Eligible"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Quiz;
