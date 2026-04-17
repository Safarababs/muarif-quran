import React, { useState } from "react";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../../firebase";
import SooraTehreem from "../Questions/soorat Tehreem/SoroatTehreem";

const UploadQuestions = () => {
  const [docName, setDocName] = useState("SooratTehreemSecondRound");
  const [title, setTitle] = useState("Soorat Tehreem");
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    try {
      setLoading(true);

      await setDoc(doc(db, "Questions", docName), {
        title,
        data: SooraTehreem,
        totalQuestions: SooraTehreem.length,
        updatedAt: serverTimestamp(),
      });

      alert("Questions uploaded successfully!");
    } catch (error) {
      console.error("Error uploading questions:", error);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Upload Questions</h2>

      <input
        type="text"
        value={docName}
        onChange={(e) => setDocName(e.target.value)}
        placeholder="Document name e.g. SooratTehreem"
        style={{ display: "block", marginBottom: "10px", width: "300px" }}
      />

      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Quiz title"
        style={{ display: "block", marginBottom: "10px", width: "300px" }}
      />

      <button onClick={handleUpload} disabled={loading}>
        {loading ? "Uploading..." : "Upload Questions"}
      </button>
    </div>
  );
};

export default UploadQuestions;
