import React from "react";
import "./searchbar.css";


function Searchbar(props) {
  return (
    <>
      <div className="input-group mb-3">
        <input
          value={props.search}
          onChange={props.handleInputChange} 
          id="search"
          type="text"
          className="form-control" 
          placeholder="Search for an Employee" 
        />
      </div>
    </>
  )
}

export default Searchbar;