import React from "react";

const GeneralBooks = () => {
  return (
    <>
      <ul className="controls">
        <li data-filter="all">
          <p>all books</p>
        </li>
        <li data-filter="course" style={{ width: "auto" }}>
          <p>Course books</p>
        </li>
        <li data-filter="tafseer" style={{ width: "auto" }}>
          <p>tafseer-e-quran</p>
        </li>
        <li data-filter="maqtal">
          <p>maqtal books</p>
        </li>
        <li data-filter="hadees">
          <p>hadees books</p>
        </li>
        <li data-filter="tozee">
          <p>tozee ul masile</p>
        </li>
      </ul>
    </>
  );
};

export default GeneralBooks;
