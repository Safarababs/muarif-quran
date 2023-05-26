import React from "react";
import mafatee from "../Mafatee/mafatee.png";
import mafateeJinan from "../Mafatee/Mafateeh ul Jinaan.pdf";

const Mafatee = () => {
  return (
    <div className="box maqtal">
      <div className="image">
        <img src={mafatee} alt="" />
      </div>
      <div className="content">
        <h3>
          Mafatee ul Janan <span>مفاتیح الجنان</span>
        </h3>

        <a href={mafateeJinan} className="button" download>
          <i className="fas fa-file-pdf">
            {" "}
            <span>download book</span>
          </i>
        </a>
      </div>
    </div>
  );
};

export default Mafatee;
