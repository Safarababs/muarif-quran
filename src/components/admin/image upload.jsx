import React from "react";
import { useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import data from "../data";

function ImageUpload() {
  const [input, setInput] = useState({
    title: "",
    link: "",
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
      link: input.link,
    };

    if (newNote.title === "") {
      swal("Title?", "title is missing it is required", "warning");
    } else if (newNote.link === "") {
      swal("Video link?", "video link is missing it is required", "warning");
    } else {
      axios.post(data.backend + "/galleryUpload", newNote);
      swal("Success!", "successfully uploaded", "success");
    }
  }

  return (
    <>
      <form>
        <div className="form-group">
          <select
            onChange={handleChange}
            name="title"
            value={input.title}
            className="form-control"
            placeholder="image title"
            style={{ color: "#89cff0" }}
          >
            <option>Select Type video/image?</option>
            <option>image</option>
            <option>video</option>
          </select>
        </div>

        <div className="form-group">
          <input
            onChange={handleChange}
            name="link"
            required
            value={input.link}
            className="form-control"
            autoComplete="off"
            placeholder="facebook image or youtube video link"
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

export default ImageUpload;
