import React, { useState } from "react";
import swal from "sweetalert";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import data from "../../data";
import BackendCall from "../../institute/BackendCall";

const UpdatePassword = () => {
  const navigate = useNavigate();
  const [NewPassword, setNewPassword] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setNewPassword({
      ...NewPassword,
      [name]: value,
    });
  }

  const handleLogin = (event) => {
    event.preventDefault();
    const user = { email: NewPassword.email, password: NewPassword.password };
    if (NewPassword.password !== NewPassword.confirmPassword) {
      swal(
        "Password didn't match",
        "Please check both password should be same",
        "error"
      );
    } else if (
      NewPassword.password === "" ||
      NewPassword.confirmPassword === ""
    ) {
      swal(
        "Values Not Entered",
        "Please check both password should be same",
        "error"
      );
    } else {
      axios.post(data.backend + "/update", user).then((res) => {
        if (res.data.message === "password updated successfully") {
          swal(res.data.message, "Now you can login", "success");
        } else {
          swal(res.data.message, "", "error");
        }
      });
      navigate("/login");
    }
  };

  return (
    <section className="login">
      <input
        type="text"
        value={NewPassword.email}
        name="email"
        placeholder="Enter your email address"
        onChange={handleChange}
      ></input>
      <input
        type="password"
        value={NewPassword.password}
        name="password"
        placeholder="Enter New password"
        onChange={handleChange}
      ></input>
      <input
        type="password"
        value={NewPassword.confirmPassword}
        name="confirmPassword"
        placeholder="confirm password"
        onChange={handleChange}
      ></input>
      <button onClick={handleLogin} className="button">
        submit
      </button>
      <BackendCall />
    </section>
  );
};

export default UpdatePassword;
