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

// 🔥 NEW QUIZ SYSTEM

import QuizPage from "./student/FirebaseREgistration/QuizPage";

import QuizAdminPanel from "./student/FirebaseREgistration/QuizAdminPanel";
import QuizResultPage from "./student/FirebaseREgistration/QuizResultPage";

// 🔐 FIREBASE AUTH
import RegisterPage from "./student/FirebaseREgistration/Auth/RegisterPage";
import LoginPage from "./student/FirebaseREgistration/Auth/LoginPage";
import ForgotPasswordPage from "./student/FirebaseREgistration/Auth/ForgotPasswordPage";
import MakeMeAdmin from "./student/FirebaseREgistration/Auth/MakeMeAdmin";

function App() {
  const quizConfig = {
    quizId: "SooratTehreemSecondRound",
    quizTitle: "Soorat Tehreem 2026",
    quizDate: "2026-04-18",
    resultDate: "2026-04-20",
  };

  return (
    <>
      <Router>
        <AuthProvider>
          <Header />

          <Routes>
            {/* PUBLIC ROUTES */}
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/lectures" element={<Lecture />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/books" element={<Books />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />

            {/* QUIZ SYSTEM */}
            <Route path="/quiz-page" element={<QuizPage {...quizConfig} />} />
            <Route
              path="/results"
              element={<QuizResultPage {...quizConfig} />}
            />

            {/* FireBase Auth */}
            <Route path="/auth-register" element={<RegisterPage />} />
            <Route path="/auth-login" element={<LoginPage />} />
            <Route
              path="/auth-forgot-password"
              element={<ForgotPasswordPage />}
            />
            <Route path="/make-me-admin" element={<MakeMeAdmin />} />

            {/* 🔐 ADMIN PROTECTED */}
            <Route
              path="/quiz-admin"
              element={
                <RequireAuth>
                  <QuizAdminPanel {...quizConfig} />
                </RequireAuth>
              }
            />

            {/* 404 */}
            <Route path="*" element={<NoPage />} />
          </Routes>
        </AuthProvider>
      </Router>

      <Footer />
    </>
  );
}

export default App;
