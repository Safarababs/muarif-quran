import React, { useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase";

const QuizEligibilityChecker = ({
  sooratName = "SooratTehreem",
  onApproved,
}) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [student, setStudent] = useState(null);
  const [checked, setChecked] = useState(false);

  const handleCheck = async (e) => {
    e.preventDefault();

    if (!phoneNumber) {
      alert("Enter phone number");
      return;
    }

    try {
      const studentRef = doc(
        db,
        "RegisteredStudents",
        sooratName,
        "students",
        phoneNumber,
      );

      const studentSnap = await getDoc(studentRef);

      setChecked(true);

      if (!studentSnap.exists()) {
        setStudent(null);
        return;
      }

      const studentData = studentSnap.data();
      setStudent(studentData);

      if (studentData.isApproved && onApproved) {
        onApproved(studentData);
      }
    } catch (error) {
      console.error("Error checking eligibility:", error);
      alert(error.message);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Check Eligibility</h2>

      <form onSubmit={handleCheck}>
        <input
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Enter your phone number"
          style={{ marginRight: "10px" }}
        />
        <button type="submit">Check</button>
      </form>

      {checked && !student && <p style={{ color: "red" }}>Not registered</p>}

      {student && (
        <table
          border="1"
          cellPadding="10"
          style={{ marginTop: "20px", width: "100%" }}
        >
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>City</th>
              <th>Approval</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{student.name}</td>
              <td>{student.phoneNumber}</td>
              <td>{student.city}</td>
              <td style={{ color: student.isApproved ? "green" : "red" }}>
                {student.isApproved ? "Approved" : "Pending Approval"}
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default QuizEligibilityChecker;
