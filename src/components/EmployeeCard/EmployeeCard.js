import React from "react";
import "./employeeStyle.css";

function EmployeeCard (props) {
  return (
    <div className="col-3">
      <div className="card" key={props.id}>
        <img 
          className="card-img-top" 
          alt="Profile Placeholder" 
          src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png" 
        />
        <div className="card-body">
          <h5 className="card-title">{props.firstName} {props.lastName}</h5>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <strong>Username:</strong> {props.username}
            </li>
            <li className="list-group-item">
              <strong>Email Address:</strong> {props.email}
            </li>
            <li className="list-group-item">
              <strong>Cell:</strong> {props.phone}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default EmployeeCard;