import React from "react";
import ahkam from "../ahakam/1.png";
import ahkham from "../ahakam/ahkham.pdf";

const Ahakam = () => {
  return (
    <div className="box course">
      <div className="image">
        <img src={ahkam} alt="" />
      </div>
      <div className="content">
        <h3>
          ahkam <span> شرعی فقہی احکام</span>
        </h3>

        <a href={ahkham} className="button" download>
          <i className="fas fa-file-pdf">
            {" "}
            <span>download book</span>
          </i>
        </a>
      </div>
    </div>
  );
};

export default Ahakam;
