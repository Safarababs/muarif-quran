import React from "react";
import ArabicBooks from "./ArabicBooks";
import PersianBooks from "./PersianBooks";
import GeneralBooks from "./GeneralBooks";
import HadeesBooks from "./من لا یحضرہ الفقیہ/HadeesBooks";
import TafseerKausar from "./tafseer kausar/TafseerKausar";
import MafaheemBooks from "./mafaheem/MafaheemBooks";
import Tozee from "./tozee/Tozee";
import Tajweed from "./tajweed/Tajweed";
import Ahakam from "./ahakam/Ahakam";
import Maqtal from "./maqtal/Maqtal";
import BackendCall from "../institute/BackendCall";

function Books() {
  return (
    <section className="books" id="courses">
      <GeneralBooks />

      <div className="box-container">
        <HadeesBooks />
        <TafseerKausar />
        <Maqtal />
        <MafaheemBooks />
        <Tozee />
        <Tajweed />
        <Ahakam />
        <ArabicBooks />
        <PersianBooks />
      </div>
      <BackendCall />
    </section>
  );
}

export default Books;
