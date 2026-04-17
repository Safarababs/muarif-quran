import React, { useState } from "react";
import { getAuth } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../../../firebase";
import "./AuthPages.css";

const MakeMeAdmin = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const handleMakeAdmin = async () => {
    try {
      setLoading(true);
      setMessage({ type: "", text: "" });

      const auth = getAuth();
      const user = auth.currentUser;

      if (!user) {
        setMessage({ type: "error", text: "Please login first." });
        return;
      }

      await setDoc(
        doc(db, "users", user.uid),
        {
          email: user.email || "",
          role: "admin",
        },
        { merge: true },
      );

      setMessage({ type: "success", text: "You are now admin." });
    } catch (error) {
      console.error("Make admin error:", error);
      setMessage({
        type: "error",
        text: error.message || "Could not update admin role.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1>Make Me Admin</h1>

        {message.text ? (
          <div className={`auth-message ${message.type}`}>{message.text}</div>
        ) : null}

        <button
          className="auth-btn"
          onClick={handleMakeAdmin}
          disabled={loading}
        >
          {loading ? "Please wait..." : "Make Me Admin"}
        </button>
      </div>
    </div>
  );
};

export default MakeMeAdmin;
