import React from "react";


function Searchbar() {
  return (
    <div className="container">
      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Search for an Employee" aria-label="Search for an Employee" aria-describedby="basic-addon2" />
        <div className="input-group-append">
          <button className="btn btn-outline-info" type="button">Search</button>
        </div>
      </div>
    </div>
  )
}

export default Searchbar;