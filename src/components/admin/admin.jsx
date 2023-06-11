import React from "react";
import CreationArea from "./creative page";
import Students from "../student/students";
import BackendCall from "../institute/BackendCall";
import "./admin.css";

function Creation() {
  return (
    <>
      <CreationArea />

      <Students />
      <BackendCall />
    </>
  );
}

export default Creation;
