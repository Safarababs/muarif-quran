import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "../../../../firebase";
import "./AuthPages.css";

const LoginPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "email" ? value.toLowerCase() : value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage({ type: "", text: "" });

    if (!formData.email || !formData.password) {
      setMessage({
        type: "error",
        text: "Email and password are required.",
      });
      return;
    }

    try {
      setLoading(true);

      const userCredential = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password,
      );

      const user = userCredential.user;
      const userRef = doc(db, "users", user.uid);
      const userSnap = await getDoc(userRef);

      if (userSnap.exists() && userSnap.data().role === "admin") {
        setMessage({
          type: "success",
          text: "Admin login successful.",
        });

        setTimeout(() => {
          navigate("/quiz-admin");
        }, 800);
      } else {
        setMessage({
          type: "success",
          text: "Login successful.",
        });

        setTimeout(() => {
          navigate("/");
        }, 800);
      }
    } catch (error) {
      console.error("Login error:", error);
      setMessage({
        type: "error",
        text: error.message || "Login failed.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1>Login</h1>

        {message.text ? (
          <div className={`auth-message ${message.type}`}>{message.text}</div>
        ) : null}

        <form className="auth-form" onSubmit={handleLogin}>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />

          <button type="submit" className="auth-btn" disabled={loading}>
            {loading ? "Logging In..." : "Login"}
          </button>
        </form>

        <div className="auth-links">
          <div style={{ marginBottom: "8px" }}>
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
          <Link to="/auth-register">Create new account</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
