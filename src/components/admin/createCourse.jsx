import React from "react";
import { useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import data from "../data";

function CourseForm() {
  const [input, setInput] = useState({
    courseName: "",
    day: "",
    hour: "",
    link: "",
    urdu: "",
    teacher: "",
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
    const newCourse = {
      courseName: input.courseName,
      link: input.link,
      day: input.day,
      hour: input.hour,
      urdu: input.urdu,
      teacher: input.teacher,
    };

    if (newCourse.title === "") {
      swal("Title?", "title is missing it is required", "warning");
    } else if (newCourse.link === "") {
      swal("link?", "image link is missing it is required", "warning");
    } else if (newCourse.day === "") {
      swal("Weekday?", "Weekday is missing it is required", "warning");
    } else if (newCourse.hour === "") {
      swal("Hour?", "time is missing it is required", "warning");
    } else if (newCourse.urdu === "") {
      swal("Urdu Name?", "name in urdu is missing it is required", "warning");
    } else if (newCourse.teacher === "") {
      swal(
        "Teacher Name?",
        "teacher name is missing it is required",
        "warning"
      );
    } else {
      axios.post(data.backend + "/courseUpload", newCourse);
      swal("Success!", "successfully uploaded", "success");
    }
  }

  return (
    <>
      <form>
        <div className="form-group">
          <select
            onChange={handleChange}
            name="day"
            value={input.day}
            className="form-control"
          >
            <option defaultValue="selected">Select day</option>
            <option>Sunday</option>
            <option>Monday</option>
            <option>Tuesday</option>
            <option>Wednesday</option>
            <option>Thursday</option>
            <option>Friday</option>
            <option>Saturday</option>
          </select>
        </div>
        <div className="form-group">
          <input
            onChange={handleChange}
            name="courseName"
            value={input.courseName}
            className="form-control"
            autoComplete="off"
            placeholder="course Name"
          />
        </div>

        <div className="form-group">
          <input
            onChange={handleChange}
            name="urdu"
            value={input.urdu}
            className="form-control"
            autoComplete="off"
            placeholder="course Name in urdu"
          />
        </div>

        <div className="form-group">
          <input
            onChange={handleChange}
            name="teacher"
            value={input.teacher}
            className="form-control"
            autoComplete="off"
            placeholder="teacher full name"
          />
        </div>

        <div className="form-group">
          <input
            onChange={handleChange}
            name="hour"
            required
            value={input.hour}
            className="form-control"
            autoComplete="off"
            placeholder="course hour. only type 21 or 22 format & UTC hour"
          />
        </div>

        <div className="form-group">
          <input
            onChange={handleChange}
            name="link"
            required
            value={input.link}
            className="form-control"
            autoComplete="off"
            placeholder="image link from facebook"
          />
        </div>

        <div className="form-group">
          <button onClick={handleClick} type="submit" className="submit">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export default CourseForm;
