import React, { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { Link } from "react-router-dom";
import { auth } from "../../../../firebase";
import "./AuthPages.css";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setMessage({ type: "", text: "" });

    if (!email) {
      setMessage({ type: "error", text: "Email is required." });
      return;
    }

    try {
      setLoading(true);
      await sendPasswordResetEmail(auth, email.toLowerCase());

      setMessage({
        type: "success",
        text: "Password reset email sent successfully.",
      });
    } catch (error) {
      console.error("Reset password error:", error);
      setMessage({
        type: "error",
        text: error.message || "Could not send reset email.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1>Forgot Password</h1>

        {message.text ? (
          <div className={`auth-message ${message.type}`}>{message.text}</div>
        ) : null}

        <form className="auth-form" onSubmit={handleResetPassword}>
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value.toLowerCase())}
          />

          <button type="submit" className="auth-btn" disabled={loading}>
            {loading ? "Sending..." : "Send Reset Email"}
          </button>
        </form>

        <div className="auth-links">
          <Link to="/auth-login">Back to Login</Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
