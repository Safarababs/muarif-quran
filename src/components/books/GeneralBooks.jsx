import React from "react";
import BackendCall from "../institute/BackendCall";
import "./books.css";

const GeneralBooks = () => {
  return (
    <>
      <ul className="controls">
        <li data-filter="all" className="btn">
          <p>all books</p>
        </li>
        <li data-filter="course"   className="btn">
          <p>Course books</p>
        </li>
        <li data-filter="tafseer" className="btn" >
          <p>tafseer-e-quran</p>
        </li>
        <li data-filter="maqtal"  className="btn">
          <p>maqtal books</p>
        </li>
        <li data-filter="hadees"  className="btn">
          <p>hadees books</p>
        </li>
        <li data-filter="tozee" className="btn" >
          <p>tozee ul masile</p>
        </li>
      </ul>

      <BackendCall />
    </>
  );
};

export default GeneralBooks;
