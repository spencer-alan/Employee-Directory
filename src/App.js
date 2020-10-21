import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import Searchbar from "./components/SearchBar/Searchbar";
import EmployeeCard from "./components/EmployeeCard/EmployeeCard";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
// import Row from "./components/Row/Row";
// import Col from "./components/Column/Column";
import employees from "./employee.json";


class App extends React.Component {
  state = {
    employees
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Searchbar />
        <div className="row">
          {employees.map(employee =>(
              <EmployeeCard
                firstName={employee.firstName}
                lastName={employee.lastName}
                image={employee.image}
                department={employee.department}
                position={employee.position}
                email={employee.email}
                ext={employee.ext}
              />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
