import React from "react";
import "./employeeStyle.css";

function EmployeeCard (props) {
  return (
    <div className="card">
      <img className="card-img-top" alt={props.name} src={props.image} />
      <div className="card-body content">
        <h5>{props.firstName} {props.lastName}</h5>
        <ul>
          <li>
            <strong>Department:</strong> {props.dept}
          </li>
          <li>
            <strong>Position:</strong> {props.position}
          </li>
          <li>
            <strong>Email address:</strong> {props.email}
          </li>
          <li>
            <strong>Ext.:</strong> {props.ext}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default EmployeeCard;