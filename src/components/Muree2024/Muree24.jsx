import React, { useState } from "react";
import emailjs from "emailjs-com";
import swal from "sweetalert";
import BackendCall from "../institute/BackendCall";
import "./contact.css";

function Muree24() {
  const [input, setInput] = useState({
    name: "",
    fatherName: "",

    phone: "",
    city: "",
    area: "",
    age: "",
    badge: "",
    before: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }

  function handleClick(event) {
    event.preventDefault();
    const { name, fatherName, phone, city, area, age, badge, before } = input;

    if (name && fatherName && phone && city && area && age && badge && before) {
      <BackendCall />;

      emailjs
        .sendForm(
          "service_2o5rq45",
          "template_x1jgtg8",
          event.target,
          "V8T-BnQcnCg_dNTxt"
        )
        .then(
          (result) => {
            console.log(result.text);
            swal(
              "Message Sent successfully!",
              "we will reply you ASAP! keep calm!",
              "success"
            );
          },
          (error) => {
            console.log(error.text);
            swal(
              "Some error",
              "Email not sent, check email address and all values",
              "warning"
            );
          }
        );
    } else {
      swal("Fields are required", "", "error");
    }

    event.target.reset();
  }

  return (
    <form onSubmit={handleClick}>
      <h3>Muree Camp Registration </h3>
      <input
        type="text"
        name="name"
        onChange={handleChange}
        value={input.name}
        placeholder="Name"
        className="box"
      />
      <input
        type="text"
        name="fatherName"
        onChange={handleChange}
        value={input.fatherName}
        placeholder="Father's Name"
        className="box"
      />

      <input
        type="number"
        name="phone"
        onChange={handleChange}
        value={input.phone}
        placeholder="Phone"
        className="box"
      />
      <input
        type="text"
        name="city"
        onChange={handleChange}
        value={input.city}
        placeholder="City"
        className="box"
      />
      <input
        type="text"
        name="area"
        onChange={handleChange}
        value={input.area}
        placeholder="Area"
        className="box"
      />
      <input
        type="number"
        name="age"
        onChange={handleChange}
        value={input.age}
        placeholder="Age"
        className="box"
      />
      <input
        type="text"
        name="badge"
        onChange={handleChange}
        value={input.badge}
        placeholder="Class"
        className="box"
      />
      <input
        type="text"
        name="before"
        onChange={handleChange}
        value={input.before}
        placeholder="کیا پہلے اس سمر کیمپ میں شرکت کی ہے؟"
        className="box"
      />

      <input type="submit" value="Send Message" className="btn" />
    </form>
  );
}

export default Muree24;
