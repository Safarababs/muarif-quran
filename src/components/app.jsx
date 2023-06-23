import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./header/header";
import Home from "./home/home";
import Courses from "./courses/courses";
import Creation from "./admin/admin";
import Lecture from "./lectures/lectures";
import Contact from "./contact/contact";
import Books from "./books/books";
import About from "./about/about";

import Gallery from "../components/gallery/gallery";
import Register from "./student/registerpage/register";
import Login from "./student/loginpage/login";
import Dashboard from "./student/Dashboard";

import { AuthProvider } from "./admin/auth";
import { RequireAuth } from "./admin/requireauth";

import UpdatePassword from "./student/loginpage/UpdatePassword";
import Quiz from "../components/quran-quiz/quiz";
import QuizAccess from "./quran-quiz/Access";
import Results from "./quran-quiz/ResultsForAgha";
import ResultCheck from "./quran-quiz/ResultForIndividualStudent";
import IndividualQuestion from "./quran-quiz/individualQuestion";
import Footer from "./footer/Footer";
import Logout from "./student/loginpage/logout";

function App() {
  const currentDate = new Date();
  const today = currentDate.getUTCDate();
  const currentHour = currentDate.getUTCHours() + 5;
  // test date and time
  const targetDate = 25;
  const from = 10;
  const to = 21


  return (
    <>
      <Router>
        <AuthProvider>
          <Header />

          <Routes>
            <Route path="/" exact element={<Home />}></Route>
            <Route path="/courses" element={<Courses />}></Route>
            <Route path="/lectures" element={<Lecture />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/books" element={<Books />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/gallery" element={<Gallery />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/results" element={<Results />}></Route>
            <Route path="/resultcheck" element={<ResultCheck />}></Route>
            <Route
              path="/IndividualQuestion"
              element={
                today === targetDate + 1 ? (
                  <IndividualQuestion />
                ) : (
                  <h1
                    style={{
                      margin: "15rem 4rem",
                      color: "red",
                      fontSize: "4rem",
                    }}
                  >
                    Access denied! contact developer
                  </h1>
                )
              }
            ></Route>
            <Route path="/demoquestion" element={<IndividualQuestion />}></Route>

            <Route path="/update" element={<UpdatePassword />}></Route>
            <Route
              path="/quranquiz"
              element={
                today === targetDate && currentHour >= from && currentHour < to ? (
                  <Quiz />
                ) : (
                  <QuizAccess date={targetDate} from={from} to={to}/>
                )
              }
            ></Route>
            <Route
              path="/admin"
              element={
                <RequireAuth>
                  <Creation />
                </RequireAuth>
              }
            ></Route>
            <Route path="/dashboard" element={<Dashboard />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/logout" element={<Logout />}></Route>
          </Routes>
        </AuthProvider>
      </Router>{" "}
      <Footer />
    </>
  );
}

export default App;
