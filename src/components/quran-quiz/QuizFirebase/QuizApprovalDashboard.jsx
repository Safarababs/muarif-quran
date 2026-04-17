import React, { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  doc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../../../firebase";

const QuizApprovalDashboard = () => {
  const [sooratName, setSooratName] = useState("SooratTehreem");
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchStudents = async () => {
    try {
      setLoading(true);

      const studentsRef = collection(
        db,
        "QuizRegistrations",
        sooratName,
        "students",
      );

      const snapshot = await getDocs(studentsRef);

      const studentList = snapshot.docs.map((item) => ({
        id: item.id,
        ...item.data(),
      }));

      setStudents(studentList);
    } catch (error) {
      console.error("Error fetching students:", error);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleApprove = async (phoneNumber) => {
    try {
      const studentRef = doc(
        db,
        "QuizRegistrations",
        sooratName,
        "students",
        phoneNumber,
      );

      await updateDoc(studentRef, {
        isApproved: true,
        updatedAt: serverTimestamp(),
      });

      fetchStudents();
    } catch (error) {
      console.error("Error approving student:", error);
      alert(error.message);
    }
  };

  const handleReject = async (phoneNumber) => {
    try {
      const studentRef = doc(
        db,
        "QuizRegistrations",
        sooratName,
        "students",
        phoneNumber,
      );

      await updateDoc(studentRef, {
        isApproved: false,
        updatedAt: serverTimestamp(),
      });

      fetchStudents();
    } catch (error) {
      console.error("Error rejecting student:", error);
      alert(error.message);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Quiz Approval Dashboard</h2>

      <input
        type="text"
        value={sooratName}
        onChange={(e) => setSooratName(e.target.value)}
        placeholder="Soorat name e.g. SooratTehreem"
        style={{ display: "block", marginBottom: "10px", width: "300px" }}
      />

      <button onClick={fetchStudents} style={{ marginBottom: "20px" }}>
        Load Students
      </button>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <table border="1" cellPadding="10" style={{ width: "100%" }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>City</th>
              <th>Approved</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.phoneNumber}</td>
                <td>{student.city}</td>
                <td>{student.isApproved ? "Yes" : "No"}</td>
                <td>
                  <button
                    onClick={() => handleApprove(student.phoneNumber)}
                    style={{ marginRight: "10px" }}
                  >
                    Approve
                  </button>
                  <button onClick={() => handleReject(student.phoneNumber)}>
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default QuizApprovalDashboard;
