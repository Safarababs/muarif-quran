import React from "react";

function DownloadResult({ data }) {
  const copyDataToFile = () => {
    const jsonData = JSON.stringify(data, null, 2);
    const fileContents = `const jsonData = ${jsonData};\n\nexport default jsonData;`;
    navigator.clipboard
      .writeText(fileContents)
      .then(() =>
        alert(
          "JSON data copied to clipboard. Paste it into a file and save as data.js"
        )
      )
      .catch((err) => console.error("Failed to copy JSON data", err));
  };

  return (
    <button
      onClick={copyDataToFile}
      className="btn"
      style={{ background: "black" }}
    >
      Copy Data to File
    </button>
  );
}

export default DownloadResult;
