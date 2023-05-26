import React from "react";
import SahifaSajjadiaBook from "../sahifa/Sahifa Sajjadia.pdf";
import SahifaImg from "../sahifa/SahifaImg.png";

const SahifaSajjadia = () => {
  return (
    <div className="box maqtal">
      <div className="image">
        <img src={SahifaImg} alt="" />
      </div>
      <div className="content">
        <h3>
          Sahifa Sajjadia <span>صحیفہ سجادیہ</span>
        </h3>

        <a href={SahifaSajjadiaBook} className="button" download>
          <i className="fas fa-file-pdf">
            {" "}
            <span>download book</span>
          </i>
        </a>
      </div>
    </div>
  );
};

export default SahifaSajjadia;
