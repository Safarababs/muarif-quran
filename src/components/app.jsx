import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./institute/header";
import Home from "./institute/home";
import Courses from "./institute/courses";
import Creation from "./admin/admin";
import Lecture from "./institute/lectures/lectures";
import Contact from "./contact/contact";

import Books from "./books/books";
import About from "./institute/about";

import Gallery from "../components/gallery/gallery";
import Register from "./student/registerpage/register";
import Login from "./student/loginpage/login";
import FemaleDashboard from "./student/profile2";
import MaleDashboard from "./student/profile";

import { AuthProvider } from "./admin/auth";
import { RequireAuth } from "./admin/requireauth";

import UpdatePassword from "./student/loginpage/UpdatePassword";
import Quiz from "./quran-quiz/quiz";
import SooratKausar from "./quran-quiz/Demo";

function App() {
  const currentDate = new Date();
  const today = currentDate.getDate();
  const targetDate = 28;
  const currentHour = currentDate.getUTCHours() + 5;
  const currentMonth = currentDate.getMonth() + 1;
  const currentYear = currentDate.getFullYear();
  console.log(currentHour, currentMonth, currentYear);
  

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

          <Route path="/update" element={<UpdatePassword />}></Route>
          <Route path="/quranquiz" element={today === targetDate && currentHour >= 12 && currentHour < 15 && currentYear === 2023 ? <Quiz />:<SooratKausar />}></Route>

          <Route
            path="/male"
            element={
              <RequireAuth>
                <MaleDashboard />
              </RequireAuth>
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
          <Route
            path="/female"
            element={
              <RequireAuth>
                <FemaleDashboard />
              </RequireAuth>
            }
          ></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </AuthProvider>
    </Router>
    <div className="credit">iltimas-e-dua <span>Safar Abbas</span> all © copyright 2022 - {new Date().getFullYear()} reserved</div>
    </>
  );
}

export default App;
