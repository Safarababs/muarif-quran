import React, { useEffect, useState } from "react";
import {
  collection,
  doc,
  getDocs,
  setDoc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../../../firebase";
import "./QuizAdminDashboard.css";

// Change this import whenever you want to upload a different JSON file
import SooraTehreem from "../Questions/soorat Tehreem/SoroatTehreem";

const QuizAdminDashboard = () => {
  const [sooratName, setSooratName] = useState("SooratTehreem");
  const [quizTitle, setQuizTitle] = useState("Soorat Tehreem");
  const [loading, setLoading] = useState(false);
  const [students, setStudents] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      setLoading(true);
      setMessage("");

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
      setMessage(error.message || "Failed to load students.");
    } finally {
      setLoading(false);
    }
  };

  const handleUploadQuestions = async () => {
    try {
      setLoading(true);
      setMessage("");

      await setDoc(doc(db, "Questions", sooratName), {
        title: quizTitle,
        data: SooraTehreem,
        totalQuestions: SooraTehreem.length,
        updatedAt: serverTimestamp(),
      });

      setMessage("Questions uploaded successfully.");
    } catch (error) {
      console.error("Error uploading questions:", error);
      setMessage(error.message || "Failed to upload questions.");
    } finally {
      setLoading(false);
    }
  };

  const handleApprove = async (phoneNumber) => {
    try {
      setLoading(true);
      setMessage("");

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

      await fetchStudents();
      setMessage("Student approved successfully.");
    } catch (error) {
      console.error("Error approving student:", error);
      setMessage(error.message || "Failed to approve student.");
    } finally {
      setLoading(false);
    }
  };

  const handleReject = async (phoneNumber) => {
    try {
      setLoading(true);
      setMessage("");

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

      await fetchStudents();
      setMessage("Student moved to pending/rejected state.");
    } catch (error) {
      console.error("Error rejecting student:", error);
      setMessage(error.message || "Failed to update student.");
    } finally {
      setLoading(false);
    }
  };

  const approvedCount = students.filter((student) => student.isApproved).length;
  const pendingCount = students.filter((student) => !student.isApproved).length;

  return (
    <div className="quiz-admin-dashboard">
      <div className="quiz-admin-container">
        <h1 className="dashboard-title">Quiz Admin Dashboard</h1>

        {message ? <div className="dashboard-message">{message}</div> : null}
        <div className="dashboard-card">
          <h2>Admin Instructions</h2>

          <div className="instruction-box">
            <p>
              <strong>1.</strong> Before launching a new quiz, create or upload
              the questions JSON for the new soorat.
            </p>
            <p>
              <strong>2.</strong> Questions are saved in Firestore collection{" "}
              <strong>Questions</strong> with document name like{" "}
              <strong>SooratTehreem</strong>.
            </p>
            <p>
              <strong>3.</strong> Students register themselves from the public
              registration page.
            </p>
            <p>
              <strong>4.</strong> Student registrations are saved in{" "}
              <strong>
                QuizRegistrations / SooratName / students / phoneNumber
              </strong>
              .
            </p>
            <p>
              <strong>5.</strong> Every new registration starts with{" "}
              <strong>isApproved: false</strong>.
            </p>
            <p>
              <strong>6.</strong> You must approve the student from this
              dashboard before they can attempt the quiz.
            </p>
            <p>
              <strong>7.</strong> Quiz submissions are saved in{" "}
              <strong>
                QuizResults / SooratName / submissions / phoneNumber
              </strong>
              .
            </p>
            <p>
              <strong>8.</strong> One phone number can submit only once for one
              soorat quiz.
            </p>
            <p>
              <strong>9.</strong> Before quiz day, students can check
              registration and approval status.
            </p>
            <p>
              <strong>10.</strong> On quiz day, only approved students should be
              allowed to attempt the quiz.
            </p>
            <p>
              <strong>11.</strong> After you finish setup, test the flow once:
              register → approve → start quiz → submit.
            </p>
            <p>
              <strong>12.</strong> Keep soorat document names without spaces,
              for example: <strong>SooratTehreem</strong>,{" "}
              <strong>SooratNaas</strong>.
            </p>
          </div>
        </div>
        <div className="dashboard-card">
          <h2>Quiz Setup</h2>

          <div className="form-grid">
            <div className="form-group">
              <label>Soorat Document Name</label>
              <input
                type="text"
                value={sooratName}
                onChange={(e) => setSooratName(e.target.value)}
                placeholder="e.g. SooratTehreem"
              />
            </div>

            <div className="form-group">
              <label>Quiz Title</label>
              <input
                type="text"
                value={quizTitle}
                onChange={(e) => setQuizTitle(e.target.value)}
                placeholder="e.g. Soorat Tehreem"
              />
            </div>
          </div>

          <div className="button-row">
            <button onClick={handleUploadQuestions} disabled={loading}>
              {loading ? "Please wait..." : "Upload Questions JSON"}
            </button>

            <button
              onClick={fetchStudents}
              disabled={loading}
              className="secondary"
            >
              {loading ? "Loading..." : "Load Registrations"}
            </button>
          </div>
        </div>

        <div className="stats-grid">
          <div className="stat-box">
            <h3>Total</h3>
            <p>{students.length}</p>
          </div>
          <div className="stat-box approved">
            <h3>Approved</h3>
            <p>{approvedCount}</p>
          </div>
          <div className="stat-box pending">
            <h3>Pending</h3>
            <p>{pendingCount}</p>
          </div>
        </div>

        <div className="dashboard-card">
          <h2>Student Registrations</h2>

          {students.length === 0 ? (
            <p className="empty-text">
              No registrations found for this soorat.
            </p>
          ) : (
            <div className="table-wrapper">
              <table className="students-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Father Name</th>
                    <th>Phone</th>
                    <th>City</th>
                    <th>Education</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {students.map((student) => (
                    <tr key={student.id}>
                      <td>{student.name || "-"}</td>
                      <td>{student.fatherName || "-"}</td>
                      <td>{student.phoneNumber || "-"}</td>
                      <td>{student.city || "-"}</td>
                      <td>{student.education || "-"}</td>
                      <td>
                        <span
                          className={
                            student.isApproved
                              ? "status-badge approved"
                              : "status-badge pending"
                          }
                        >
                          {student.isApproved ? "Approved" : "Pending"}
                        </span>
                      </td>
                      <td>
                        <div className="action-buttons">
                          <button
                            className="approve-btn"
                            onClick={() => handleApprove(student.phoneNumber)}
                            disabled={loading}
                          >
                            Approve
                          </button>
                          <button
                            className="reject-btn"
                            onClick={() => handleReject(student.phoneNumber)}
                            disabled={loading}
                          >
                            Reject
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizAdminDashboard;
