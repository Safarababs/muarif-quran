import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import data from "../../data";

const Register = () => {
  const history = useNavigate();

  const [user, setUser] = useState({
    fName: "",
    lName: "",
    nationality: "",
    fatherName: "",
    dateOfBirth: "",
    whatsapp: "",
    courseName: "",
    email: "",
    password: "",
    reEnterPassword: "",
    gender: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const [fNameBorder, setFnameBorder] = useState({
    border: ".1rem solid green",
    color: "#000",
  });
  const [lNameBorder, setLNameBorder] = useState({
    border: ".1rem solid green",
    color: "#000",
  });
  const [nationalityBorder, setNationalityBorder] = useState({
    border: ".1rem solid green",
    color: "#000",
  });
  const [fatherNameBorder, setFatherNameBorder] = useState({
    border: ".1rem solid green",
    color: "#000",
  });
  const [dateOfBirthBorder, setDateOfBorthBorder] = useState({
    border: ".1rem solid green",
    color: "#000",
  });
  const [whatsappBorder, setWhatsappBorder] = useState({
    border: ".1rem solid green",
    color: "#000",
  });
  const [emailBorder, setEmailBorder] = useState({
    border: ".1rem solid green",
    color: "#000",
  });
  const [courseNameBorder, setCorseNameBorder] = useState({
    border: ".1rem solid green",
    color: "#000",
  });
  const [passwordBorder, setPasswordBorder] = useState({
    border: ".1rem solid green",
    color: "#000",
  });
  const [reEnterPasswordBorder, setReEnterPasswordBorder] = useState({
    border: ".1rem solid green",
    color: "#000",
  });
  const [genderBorder, setGenderBorder] = useState({
    border: ".1rem solid green",
    color: "#000",
  });

  const register = () => {
    const {
      fName,
      lName,
      email,
      password,
      reEnterPassword,
      gender,
      nationality,
      courseName,
      dateOfBirth,
      whatsapp,
      fatherName,
    } = user;
    if (fName === "") {
      swal("First Name ?", "First Name is required", "error");
      setFnameBorder({ border: ".5rem solid red" });
    } else if (lName === "") {
      swal("Last Name ?", "Last Name is required", "error");
      setLNameBorder({ border: ".5rem solid red" });
    } else if (email === "") {
      swal("Email Address ?", "Email address is required", "error");
      setEmailBorder({ border: ".5rem solid red" });
    } else if (password === "") {
      swal("First Password ?", "First Password is required", "error");
      setPasswordBorder({ border: ".5rem solid red" });
    } else if (reEnterPassword === "") {
      swal("second password ?", "second password is required", "error");
      setReEnterPasswordBorder({ border: ".5rem solid red" });
    } else if (password !== reEnterPassword) {
      swal("Wrong Password?", "Password didn't Match", "error");
      setPasswordBorder({ border: ".5rem solid red" });
      setReEnterPasswordBorder({ border: ".5rem solid red" });
    } else if (gender === "") {
      swal("Gender Male or female ?", "Gender is required", "error");
      setGenderBorder({ border: ".5rem solid red" });
    } else if (nationality === "") {
      swal("Nationality ?", "Nationality is required", "error");
      setNationalityBorder({ border: ".5rem solid red" });
    } else if (courseName === "") {
      swal("Course Name ?", "Course Name is required", "error");
      setCorseNameBorder({ border: ".5rem solid red" });
    } else if (dateOfBirth === "") {
      swal("Date of Birth ?", "Date of Birth is required", "error");
      setDateOfBorthBorder({ border: ".5rem solid red" });
    } else if (whatsapp === "") {
      swal("Phone number ?", "Phone number is required", "error");
      setWhatsappBorder({ border: ".5rem solid red" });
    } else if (fatherName === "") {
      swal("Father Name ?", "Father Name is required", "error");
      setFatherNameBorder({ border: ".5rem solid red" });
    } else if (
      fName &&
      lName &&
      fatherName &&
      email &&
      password &&
      gender &&
      nationality &&
      courseName &&
      dateOfBirth &&
      whatsapp
    ) {
      axios.post(data.backend + "register", user).then((res) => {
        if (res.data.message === "Already registered! Try login!") {
          swal(res.data.message, "Try login now!", "error");
          history("/login");
        } else {
          swal("Registered", res.data.message, "success");
          history("/login");
        }
      });
    } else {
      swal(
        "Something is wrong",
        "if all values are ok? contact developer",
        "error"
      );
      history("/");
    }
  };

  return (
    <>
      <section className="register">
        <input
          style={fNameBorder}
          className="input"
          type="text"
          name="fName"
          value={user.fName}
          placeholder="first Name"
          onChange={handleChange}
        ></input>
        <input
          style={lNameBorder}
          className="input"
          type="text"
          name="lName"
          value={user.lName}
          placeholder="last Name"
          onChange={handleChange}
        ></input>
        <input
          style={fatherNameBorder}
          className="input"
          type="text"
          name="fatherName"
          value={user.fatherName}
          placeholder="father Name"
          onChange={handleChange}
        ></input>
        <input
          style={nationalityBorder}
          className="input"
          type="country"
          name="nationality"
          value={user.nationality}
          placeholder="nationality"
          onChange={handleChange}
        ></input>
        <input
          style={whatsappBorder}
          className="input"
          type="number"
          name="whatsapp"
          value={user.whatsapp}
          placeholder="whatsapp number"
          onChange={handleChange}
        ></input>
        <select
          style={courseNameBorder}
          className="input"
          onChange={handleChange}
          name="courseName"
          value={user.courseName}
        >
          <option defaultValue="enroll for all">Select course</option>
          <option>enroll for all</option>
          <option>tafseer-e-quran</option>
          <option>mafaheem-e-quran</option>
          <option>mafaheem-e-quran</option>
          <option>tafseer-e-quran</option>
          <option>persian language</option>
          <option>arabic language</option>
          <option>asan tajweed</option>
          <option>fiqee ahkham</option>
        </select>
        <input
          style={dateOfBirthBorder}
          className="input"
          type="text"
          name="dateOfBirth"
          value={user.dateOfBirth}
          placeholder="date of birth (dD/mM/yYYY)"
          onChange={handleChange}
        ></input>
        <input
          style={emailBorder}
          className="input"
          type="email"
          name="email"
          value={user.email}
          placeholder="Your Email"
          onChange={handleChange}
        ></input>
        <input
          style={passwordBorder}
          className="input"
          type="password"
          name="password"
          value={user.password}
          placeholder="Your Password"
          onChange={handleChange}
        ></input>
        <input
          style={reEnterPasswordBorder}
          className="input"
          type="password"
          name="reEnterPassword"
          value={user.reEnterPassword}
          placeholder="Re-enter Password"
          onChange={handleChange}
        ></input>
        <select
          style={genderBorder}
          className="input"
          type="text"
          name="gender"
          value={user.gender}
          placeholder="gender"
          onChange={handleChange}
        >
          <option defaultValue="male">Gender</option>
          <option>male</option>
          <option>female</option>
        </select>

        <div className="button" onClick={register}>
          Register
        </div>
        <p>or</p>
        <div className="button" onClick={() => history("/login")}>
          Login
        </div>
      </section>
    </>
  );
};

export default Register;
