import React from "react";
import "./searchbar.css";


function Searchbar() {
  return (
    <div className="container">
      <div className="row">
        <div  className="col-8">
          <div id="search" className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Search for an Employee" aria-label="Search for an Employee" aria-describedby="basic-addon2" />
            <div className="input-group-append">
              <button className="btn btn-outline-info" type="button">Search</button>
            </div>
          </div>
        </div>
        <div className="col-4 clearfix">
          <div id="filter" className="form-inline">
            <select id="deptFilter" className="form-control">
              <option selected>Filter...</option>
              <option value="administration">Administration</option>
              <option value="publicRelations">Public Relations</option>
              <option value="legal">Legal</option>
              <option value="infoTech">Information Tech</option>
            </select>
            <button type="submit" className="btn btn-outline-info">Search</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Searchbar;