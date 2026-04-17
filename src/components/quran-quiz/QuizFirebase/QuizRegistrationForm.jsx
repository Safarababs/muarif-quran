import React, { useState } from "react";
import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../../firebase";

const QuizRegistrationForm = () => {
  const [sooratName, setSooratName] = useState("SooratTehreemSecondRound");
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    fatherName: "",
    age: "",
    education: "",
    city: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.phoneNumber) {
      alert("Name and phone number are required");
      return;
    }

    try {
      setLoading(true);

      const registrationRef = doc(
        db,
        "QuizRegistrations",
        sooratName,
        "students",
        formData.phoneNumber,
      );

      const existingSnap = await getDoc(registrationRef);

      if (existingSnap.exists()) {
        alert("You have already registered for this quiz.");
        setLoading(false);
        return;
      }

      await setDoc(registrationRef, {
        ...formData,
        isApproved: false,
        sooratName,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });

      alert(
        "Registration submitted successfully. Please wait for admin approval.",
      );

      setFormData({
        name: "",
        fatherName: "",
        age: "",
        education: "",
        city: "",
        phoneNumber: "",
      });
    } catch (error) {
      console.error("Error registering:", error);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Quiz Registration Form</h2>

      <form onSubmit={handleRegister}>
        <input
          type="text"
          value={sooratName}
          onChange={(e) => setSooratName(e.target.value)}
          placeholder="Soorat name e.g. SooratTehreem"
          style={{ display: "block", marginBottom: "10px", width: "300px" }}
        />

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          style={{ display: "block", marginBottom: "10px", width: "300px" }}
        />

        <input
          type="text"
          name="fatherName"
          value={formData.fatherName}
          onChange={handleChange}
          placeholder="Father Name"
          style={{ display: "block", marginBottom: "10px", width: "300px" }}
        />

        <input
          type="text"
          name="age"
          value={formData.age}
          onChange={handleChange}
          placeholder="Age"
          style={{ display: "block", marginBottom: "10px", width: "300px" }}
        />

        <input
          type="text"
          name="education"
          value={formData.education}
          onChange={handleChange}
          placeholder="Education"
          style={{ display: "block", marginBottom: "10px", width: "300px" }}
        />

        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          placeholder="City"
          style={{ display: "block", marginBottom: "10px", width: "300px" }}
        />

        <input
          type="text"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          placeholder="Phone Number"
          style={{ display: "block", marginBottom: "10px", width: "300px" }}
        />

        <button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Register"}
        </button>
      </form>
    </div>
  );
};

export default QuizRegistrationForm;
