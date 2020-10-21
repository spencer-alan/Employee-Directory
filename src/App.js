import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import EmployeeCard from "./components/EmployeeCard/EmployeeCard";


function App() {
  return (
    <div className="App">
      <EmployeeCard />
    </div>
  );
}

export default App;
