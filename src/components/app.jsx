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

import SooratIKausar from "./quran-quiz/Revisions/SooratKausar";
import SooratNaas from "./quran-quiz/Revisions/SooratNaas";
import SooratQuraish from "./quran-quiz/Revisions/SooratQuraish";
import SooratNasar from "./quran-quiz/Revisions/SooratNasar";
import SooratMahoon from "./quran-quiz/Revisions/SooratMahoon";
import SooratKafroon from "./quran-quiz/Revisions/SooratIKafiroon";
import SooratIkhlas from "./quran-quiz/Revisions/SooratIkhlas";
import SooratFalak from "./quran-quiz/Revisions/SooratFalak";
import SooratFeel from "./quran-quiz/Revisions/SooratFeel";
import SooratHamza from "./quran-quiz/Revisions/SooratHamza";
import NoPage from "./institute/NoPage";

function App() {
  const currentDate = new Date();
  const today = currentDate.getUTCDate();
  const currentHour = currentDate.getUTCHours() + 5;
  // test date and time
  const targetDate = 16;
  const from = 9;
  const to = 21;
  // final quiz date add must to show certificate to individual student
  const finalDate = 16;


  return (
    <>
      <Router>
        <AuthProvider>
          <Header />

          <Routes>
            <Route path="/" exact element={<Home />}></Route>
            <Route path="*" element={<NoPage />} />
            <Route path="/courses" element={<Courses />}></Route>
            <Route path="/lectures" element={<Lecture />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/books" element={<Books />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/gallery" element={<Gallery />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/results" element={<Results />}></Route>
            <Route
              path="/resultcheck"
              element={<ResultCheck targetDate={finalDate} />}
            ></Route>
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
            <Route path="/recheck" element={<IndividualQuestion />}></Route>

            <Route path="/update" element={<UpdatePassword />}></Route>

            <Route
              path="/quranquiz"
              element={
                today === targetDate &&
                currentHour >= from &&
                currentHour < to ? (
                  <Quiz />
                ) : (
                  <QuizAccess date={targetDate} from={from} to={to} />
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

            {/* previos all soorat quiz */}

            <Route
              path="/sooratkausar"
              element={
                today === targetDate ? (
                  <h1
                    style={{
                      margin: "15rem 4rem",
                      color: "red",
                      fontSize: "4rem",
                    }}
                  >
                    Accss denied
                  </h1>
                ) : (
                  <SooratIKausar />
                )
              }
            ></Route>
            <Route
              path="/sooratnaas"
              element={
                today === targetDate ? (
                  <h1
                    style={{
                      margin: "15rem 4rem",
                      color: "red",
                      fontSize: "4rem",
                    }}
                  >
                    Accss denied
                  </h1>
                ) : (
                  <SooratNaas />
                )
              }
            ></Route>
            <Route
              path="/sooratquraish"
              element={
                today === targetDate ? (
                  <h1
                    style={{
                      margin: "15rem 4rem",
                      color: "red",
                      fontSize: "4rem",
                    }}
                  >
                    Accss denied
                  </h1>
                ) : (
                  <SooratQuraish />
                )
              }
            ></Route>
            <Route
              path="/sooratnasar"
              element={
                today === targetDate ? (
                  <h1
                    style={{
                      margin: "15rem 4rem",
                      color: "red",
                      fontSize: "4rem",
                    }}
                  >
                    Accss denied
                  </h1>
                ) : (
                  <SooratNasar />
                )
              }
            ></Route>
            <Route
              path="/sooratmahoon"
              element={
                today === targetDate ? (
                  <h1
                    style={{
                      margin: "15rem 4rem",
                      color: "red",
                      fontSize: "4rem",
                    }}
                  >
                    Accss denied
                  </h1>
                ) : (
                  <SooratMahoon />
                )
              }
            ></Route>
            <Route
              path="/sooratkafroon"
              element={
                today === targetDate ? (
                  <h1
                    style={{
                      margin: "15rem 4rem",
                      color: "red",
                      fontSize: "4rem",
                    }}
                  >
                    Accss denied
                  </h1>
                ) : (
                  <SooratKafroon />
                )
              }
            ></Route>
            <Route
              path="/sooratikhlas"
              element={
                today === targetDate ? (
                  <h1
                    style={{
                      margin: "15rem 4rem",
                      color: "red",
                      fontSize: "4rem",
                    }}
                  >
                    Accss denied
                  </h1>
                ) : (
                  <SooratIkhlas />
                )
              }
            ></Route>
            <Route
              path="/sooratfalak"
              element={
                today === targetDate ? (
                  <h1
                    style={{
                      margin: "15rem 4rem",
                      color: "red",
                      fontSize: "4rem",
                    }}
                  >
                    Accss denied
                  </h1>
                ) : (
                  <SooratFalak />
                )
              }
            ></Route>
            <Route
              path="/sooratfeel"
              element={
                today === targetDate ? (
                  <h1
                    style={{
                      margin: "15rem 4rem",
                      color: "red",
                      fontSize: "4rem",
                    }}
                  >
                    Accss denied
                  </h1>
                ) : (
                  <SooratFeel />
                )
              }
            ></Route>
            <Route
              path="/soorathamza"
              element={
                today === targetDate ? (
                  <h1
                    style={{
                      margin: "15rem 4rem",
                      color: "red",
                      fontSize: "4rem",
                    }}
                  >
                    Accss denied
                  </h1>
                ) : (
                  <SooratHamza />
                )
              }
            ></Route>
          </Routes>
        </AuthProvider>
      </Router>{" "}
      <Footer />
    </>
  );
}

export default App;
