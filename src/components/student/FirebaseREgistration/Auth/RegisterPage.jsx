import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "../../../../firebase";
import "./AuthPages.css";

const RegisterPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
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

  const handleRegister = async (e) => {
    e.preventDefault();
    setMessage({ type: "", text: "" });

    if (!formData.name || !formData.email || !formData.password) {
      setMessage({ type: "error", text: "All fields are required." });
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setMessage({ type: "error", text: "Passwords do not match." });
      return;
    }

    if (formData.password.length < 6) {
      setMessage({
        type: "error",
        text: "Password should be at least 6 characters.",
      });
      return;
    }

    try {
      setLoading(true);

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password,
      );

      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        name: formData.name,
        email: formData.email,
        role: "user",
        createdAt: serverTimestamp(),
      });

      setMessage({
        type: "success",
        text: "Account created successfully. Please login.",
      });

      setTimeout(() => {
        navigate("/auth-login");
      }, 1000);
    } catch (error) {
      console.error("Register error:", error);
      setMessage({
        type: "error",
        text: error.message || "Failed to create account.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1>Register</h1>

        {message.text ? (
          <div className={`auth-message ${message.type}`}>{message.text}</div>
        ) : null}

        <form className="auth-form" onSubmit={handleRegister}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
          />

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

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />

          <button type="submit" className="auth-btn" disabled={loading}>
            {loading ? "Creating Account..." : "Register"}
          </button>
        </form>

        <div className="auth-links">
          <Link to="/auth-login">Already have an account? Login</Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
