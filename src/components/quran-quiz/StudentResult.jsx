import React, { useRef } from "react";
import safar from "../quran-quiz/quran.png";

function StudentResult(props) {
  const containerRef = useRef(null);

  const handleDownload = () => {
    const container = containerRef.current;
    const image = new Image();
    image.src = safar;
    image.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = image.width;
      canvas.height = image.height;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(image, 0, 0);
      ctx.font = "5rem Times New Roman";
      ctx.fillStyle = "white";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      const x = canvas.width / 2;
      const y = canvas.height / 2 + 8; // Adjust the vertical position by adding or subtracting a value
      ctx.fillText(props.name + " Marks Obtained " + props.obtainedMarks, x, y);

      const dataURL = canvas.toDataURL("image/png");

      const link = document.createElement("a");
      link.href = dataURL;
      link.download = "image_with_text.png";
      link.style.display = "none";

      container.appendChild(link);
      link.click();

      container.removeChild(link);
    };
  };

  return (
    <div className="newresult">
      <div ref={containerRef} className="container">
        <img src={safar} alt="Background" />
        <div className="text">{props.name + " Marks " + props.obtainedMarks}</div>
      </div>
      <button onClick={handleDownload} className="btn">
        Download certificate
      </button>
    </div>
  );
}

export default StudentResult;
