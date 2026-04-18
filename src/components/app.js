import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./header/header";
import Home from "./home/home";
import Courses from "./courses/courses";
import Lecture from "./lectures/lectures";
import Contact from "./contact/contact";
import Books from "./books/books";
import About from "./about/about";
import Gallery from "./gallery/gallery";
import Footer from "./footer/Footer";
import NoPage from "./institute/NoPage";

import { AuthProvider } from "./admin/auth";
import { RequireAuth } from "./admin/requireauth";

import RegisterPage from "./student/FirebaseREgistration/Auth/RegisterPage";
import LoginPage from "./student/FirebaseREgistration/Auth/LoginPage";
import ForgotPasswordPage from "./student/FirebaseREgistration/Auth/ForgotPasswordPage";
import MakeMeAdmin from "./student/FirebaseREgistration/Auth/MakeMeAdmin";

import QuizAdminPanel from "./student/FirebaseREgistration/QuizAdminPanel";
import QuizPage from "./student/FirebaseREgistration/QuizPage";
import QuizResultPage from "./student/FirebaseREgistration/QuizResultPage";
import AdminResultsPage from "./student/FirebaseREgistration/AdminResultsPage";

function App() {
  const quizConfig = {
    quizId: "SooratTehreemSecondRound",
    quizTitle: "Soorat Tehreem 2026",
    quizDate: "2026-04-19",
    resultDate: "2026-04-20",
    startHour: 18,
    endHour: 22,
    timeZone: "Asia/Karachi",
  };

  const getPakistanNow = () => {
    const now = new Date();
    return new Date(
      now.toLocaleString("en-US", { timeZone: quizConfig.timeZone }),
    );
  };

  const formatHour = (hour) => {
    const period = hour >= 12 ? "PM" : "AM";
    const formattedHour = hour % 12 === 0 ? 12 : hour % 12;
    return `${formattedHour}:00 ${period}`;
  };

  const isQuizDate = () => {
    const pakNow = getPakistanNow();
    const today = new Date(
      pakNow.getFullYear(),
      pakNow.getMonth(),
      pakNow.getDate(),
    );

    const target = new Date(quizConfig.quizDate);
    const quizDay = new Date(
      target.getFullYear(),
      target.getMonth(),
      target.getDate(),
    );

    return today.getTime() === quizDay.getTime();
  };

  const isQuizTimeOpen = () => {
    const pakNow = getPakistanNow();
    const currentMinutes = pakNow.getHours() * 60 + pakNow.getMinutes();
    const startMinutes = quizConfig.startHour * 60;
    const endMinutes = quizConfig.endHour * 60;

    return currentMinutes >= startMinutes && currentMinutes < endMinutes;
  };

  const isResultDayOpen = () => {
    const pakNow = getPakistanNow();
    const today = new Date(
      pakNow.getFullYear(),
      pakNow.getMonth(),
      pakNow.getDate(),
    );

    const target = new Date(quizConfig.resultDate);
    const resultDay = new Date(
      target.getFullYear(),
      target.getMonth(),
      target.getDate(),
    );

    return today.getTime() >= resultDay.getTime();
  };

  const getCountdownToQuizStart = () => {
    const pakNow = getPakistanNow();

    const quizStart = new Date(pakNow);
    quizStart.setHours(quizConfig.startHour, 0, 0, 0);

    const targetDate = new Date(quizConfig.quizDate);
    const quizDay = new Date(
      targetDate.getFullYear(),
      targetDate.getMonth(),
      targetDate.getDate(),
    );

    const pakDate = new Date(
      pakNow.getFullYear(),
      pakNow.getMonth(),
      pakNow.getDate(),
    );

    if (pakDate.getTime() !== quizDay.getTime()) {
      return null;
    }

    const diff = quizStart - pakNow;

    if (diff <= 0) return null;

    const totalSeconds = Math.floor(diff / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return `${hours}h ${minutes}m ${seconds}s`;
  };

  const quizWindowOpen = isQuizDate() && isQuizTimeOpen();
  const countdown = getCountdownToQuizStart();

  const QuizClosedMessage = (
    <div
      style={{
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
      }}
    >
      <div
        style={{
          maxWidth: "700px",
          width: "100%",
          background: "#fff",
          borderRadius: "16px",
          padding: "2rem",
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
          textAlign: "center",
        }}
      >
        <h1 style={{ color: "#c62828", marginBottom: "1rem" }}>
          Quiz is currently closed
        </h1>
        <p style={{ fontSize: "1.6rem", marginBottom: "0.8rem" }}>
          <strong>{quizConfig.quizTitle}</strong>
        </p>
        <p style={{ fontSize: "1.4rem", marginBottom: "0.5rem" }}>
          Quiz Date: <strong>{quizConfig.quizDate}</strong>
        </p>
        <p style={{ fontSize: "1.4rem", marginBottom: "0.5rem" }}>
          Quiz Time: <strong>{formatHour(quizConfig.startHour)}</strong> to{" "}
          <strong>{formatHour(quizConfig.endHour)}</strong> (Pakistan Time)
        </p>

        {countdown && (
          <p style={{ fontSize: "1.4rem", color: "#0f766e" }}>
            Quiz starts in: <strong>{countdown}</strong>
          </p>
        )}
      </div>
    </div>
  );

  const ResultClosedMessage = (
    <div
      style={{
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
      }}
    >
      <div
        style={{
          maxWidth: "700px",
          width: "100%",
          background: "#fff",
          borderRadius: "16px",
          padding: "2rem",
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
          textAlign: "center",
        }}
      >
        <h1 style={{ color: "#c62828", marginBottom: "1rem" }}>
          Results are not available yet
        </h1>
        <p style={{ fontSize: "1.6rem", marginBottom: "0.8rem" }}>
          <strong>{quizConfig.quizTitle}</strong>
        </p>
        <p style={{ fontSize: "1.4rem" }}>
          Result Date: <strong>{quizConfig.resultDate}</strong>
        </p>
      </div>
    </div>
  );

  return (
    <>
      <Router>
        <AuthProvider>
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/lectures" element={<Lecture />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/books" element={<Books />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />

            <Route path="/auth-register" element={<RegisterPage />} />
            <Route path="/auth-login" element={<LoginPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/make-me-admin" element={<MakeMeAdmin />} />

            <Route
              path="/quiz-admin"
              element={
                <RequireAuth>
                  <QuizAdminPanel
                    quizId={quizConfig.quizId}
                    quizTitle={quizConfig.quizTitle}
                  />
                </RequireAuth>
              }
            />

            <Route
              path="/quiz-page"
              element={
                quizWindowOpen ? (
                  <QuizPage
                    quizId={quizConfig.quizId}
                    quizTitle={quizConfig.quizTitle}
                    quizDate={quizConfig.quizDate}
                    startHour={quizConfig.startHour}
                    endHour={quizConfig.endHour}
                    timeZone={quizConfig.timeZone}
                  />
                ) : (
                  QuizClosedMessage
                )
              }
            />

            <Route
              path="/quiz-result"
              element={
                isResultDayOpen() ? (
                  <QuizResultPage
                    quizId={quizConfig.quizId}
                    quizTitle={quizConfig.quizTitle}
                    resultDate={quizConfig.resultDate}
                  />
                ) : (
                  ResultClosedMessage
                )
              }
            />
            <Route
              path="/safarResult"
              element={
                <RequireAuth>
                  <AdminResultsPage
                    quizId={quizConfig.quizId}
                    quizTitle={quizConfig.quizTitle}
                  />
                </RequireAuth>
              }
            />

            <Route path="*" element={<NoPage />} />
          </Routes>
        </AuthProvider>
      </Router>

      <Footer />
    </>
  );
}

export default App;
