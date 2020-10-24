import React from "react";
import "./searchbar.css";


function Searchbar(props) {
  return (
    <>
      <div className="col-8">
        <div className="input-group mb-3">
          <input
            value={props.search}
            onChange={props.handleInputChange} 
            id="search"
            type="text"
            className="form-control" 
            placeholder="Search for an Employee" 
          />
          <div className="input-group-append">
            <button className="btn btn-outline-info" type="submit" onClick={props.searchEmployee}>
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="col-4 clearfix">
        <div id="filter" className="form-inline">
          <select id="deptFilter" className="form-control">
            <option defaultValue>Filter...</option>
            <option value="administration">Administration</option>
            <option value="publicRelations">Public Relations</option>
            <option value="legal">Legal</option>
            <option value="infoTech">Information Tech</option>
          </select>
          <button type="submit" className="btn btn-outline-info">Search</button>
        </div>
      </div>
    </>
  )
}

export default Searchbar;