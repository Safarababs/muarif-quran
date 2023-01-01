import React from 'react'

function NewStudent(props) {
  return (
    
        <div className="box">

            <div className="image">
                {props.gender === "female" ? <i className="fas fa-female"></i> : <i className="fas fa-user-tie"></i>}
                <h3>{props.fName + " " + props.lName}</h3>
            </div>

            <div className="content">
                <table>
                <tbody>
                    <tr>
                        <th>credentials</th>
                        <th>descriptions</th>
                        
                    </tr>
                    <tr>
                        <td>Father Name:</td>
                        <td>{props.fatherName}</td>
                        
                    </tr>
                    <tr>
                        <td>Nationality: </td>
                        <td>{props.nationality}</td>
                        
                    </tr>
                    <tr>
                        <td>gender: </td>
                        <td>{props.gender}</td>
                       
                    </tr>
                    <tr>
                        <td>course: </td>
                        <td>{props.courseName}</td>
                        
                    </tr>
                    <tr>
                        <td>date of birth</td>
                        <td>{props.dateOfBirth}</td>
                        
                    </tr>
                    <tr>
                        <td>email</td>
                        <td>{props.email}</td>
                        
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
  )
}

export default NewStudent