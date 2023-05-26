import React from "react";
import { useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import data from "../data";

function LectureFrom() {
  const [input, setInput] = useState({
    title: "",
    content: "",
    link: "",
    courseName: "",
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
    const newNote = {
      title: input.title,
      content: input.content,
      link: input.link,
      courseName: input.courseName,
    };

    if (newNote.title === "") {
      swal("Title?", "title is missing it is required", "warning");
    } else if (newNote.content === "") {
      swal("Description?", "please must insert description", "warning");
    } else if (newNote.link === "") {
      swal("Video link?", "video link is missing it is required", "warning");
    } else {
      axios.post(data.backend + "/create", newNote);
      swal("Success!", "successfully uploaded", "success");
    }
  }

  return (
    <>
      <form>
        <div className="form-group">
          <select
            onChange={handleChange}
            name="courseName"
            value={input.courseName}
            className="form-control"
          >
            <option defaultValue="selected">Select course</option>
            <option>tafseer-e-quran</option>
            <option>mafaheem-e-quran</option>
            <option>mafaheem-e-quran</option>
            <option>tafseer-e-quran</option>
            <option>persian language</option>
            <option>arabic language</option>
            <option>asan tajweed</option>
            <option>fiqee ahkham</option>
            <option>general lectures</option>
          </select>
        </div>
        <div className="form-group">
          <input
            onChange={handleChange}
            name="title"
            value={input.title}
            className="form-control"
            placeholder="lecture title"
          />
        </div>
        <div className="form-group">
          <input
            onChange={handleChange}
            name="content"
            value={input.content}
            className="form-control"
            autoComplete="off"
            placeholder="lecture description"
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
            placeholder="embed youtube link"
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

export default LectureFrom;
