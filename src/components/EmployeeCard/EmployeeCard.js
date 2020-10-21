import React from "react";
import "./employeeStyle.css";

function EmployeeCard (props) {
  return (
    <div className="col-3">
      <div className="card">
        <img className="card-img-top" alt={props.image} src={props.image} />
        <div className="card-body">
          <h5 className="card-title">{props.firstName} {props.lastName}</h5>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <strong>Department:</strong> {props.department}
            </li>
            <li className="list-group-item">
              <strong>Position:</strong> {props.position}
            </li>
            <li className="list-group-item">
              <strong>Email Address:</strong> {props.email}
            </li>
            <li className="list-group-item">
              <strong>Ext.:</strong> {props.ext}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default EmployeeCard;