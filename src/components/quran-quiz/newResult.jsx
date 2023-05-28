import React from "react";

function NewResult(props) {
  return (
    <div className="box">
      <div className="content">
        <table>
          <tbody>
            <tr>
              <th>credentials</th>
              <th>descriptions</th>
            </tr>
            <tr>
              <td>Name:</td>
              <td>{props.name}</td>
            </tr>
            <tr>
              <td>Phone Number: </td>
              <td>{props.phoneNumber}</td>
            </tr>
            <tr>
              <td>Obtained marks: </td>
              <td>{props.obtainedMarks}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default NewResult;
