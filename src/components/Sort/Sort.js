import React from "react";
import "./sort.css";

function Sort(props) {
  return (
    <>
      <form 
        id="sort" 
        className="form-inline"
        onSubmit={props.handleSort}   
      >
        <select id="sortBy" className="form-control"  onChange={props.onChange}>
          <option defaultValue>Sort...</option>
          <option value="decending" data-value="decending">A-Z</option>
          <option value="ascending" data-value="ascending">Z-A</option>
        </select>
        <button type="submit" className="btn btn-outline-info">Search</button>
      </form>
    </>
  )
}

export default Sort;