import React from "react";
import certificateImage from "../student/certificate.png";

function Certificate(props) {
  return (
    <div
      style={{
        background: `url(${certificateImage}) no-repeat center center`,
        backgroundSize: "cover",
        width: "80%",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border:"solid 5px red"
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h2>{props.name}</h2>
        <p>{props.obtainedMarks}</p>
      </div>
    </div>
  );
};

export default Certificate;
