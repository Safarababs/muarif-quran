import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { useAuth } from "../../admin/auth";
import data from "../../data";
import BackendCall from "../../institute/BackendCall";

function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const auth = useAuth();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  async function handleLogin() {
    setLoading(true);
    try {
      const res = await axios.post(data.backend + "/login", user);
      if (res.data.message === "Login successfully") {
        // Store user data in local storage
        localStorage.setItem("userData", JSON.stringify(res.data.student));
        localStorage.setItem("isLoggedIn", true);
        auth.login(user);
        navigate(res.data.student.gender === "admin" ? "/admin" : "/dashboard");
      } else {
        swal(res.data.message, "", "warning");
      }
    } catch (error) {
      swal("Error", "An error occurred while logging in", "error");
    }
    setLoading(false);
  }

  useEffect(() => {
    // Check if user is already logged in
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn) {
      const userData = JSON.parse(localStorage.getItem("userData"));
      if (userData) {
        navigate(userData.gender === "admin" ? "/admin" : "/dashboard");
      }
    }
  }, [navigate]); // Empty dependency array to run the effect only once

 

  return (
    <>
      <section className="login">
        <input
          type="text"
          name="email"
          value={user.email}
          onChange={handleChange}
          placeholder="Enter your Email"
        />
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          placeholder="Enter your Password"
        />
        <div className="button" onClick={handleLogin}>
          {loading ? "Loading..." : "Login"}
        </div>
        <p>or</p>
        <div className="button" onClick={() => navigate("/register")}>
          {loading ? "Loading..." : "Register"}
        </div>
        <a
          href="/Update"
          style={{
            color: "blue",
            fontSize: "2rem",
            textDecoration: "underline",
          }}
        >
          Forgot Password?
        </a>
      </section>
      <BackendCall />
    </>
  );
}

export default Login;
