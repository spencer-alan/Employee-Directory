import React from "react";
import Searchbar from "./components/SearchBar/Searchbar";
import EmployeeCard from "./components/EmployeeCard/EmployeeCard";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Row from "./components/Row/Row";
import Container from "./components/Container/Container";
import API from "./utils/API";
// import allEmployees from "./employee.json";


class App extends React.Component {
  state = {
    initialEmployees: [],
    displayEmployees: [],
    search: "",
  };

  componentDidMount() {
    API.getEmployees()
      .then(res =>
        this.setState({
          ...this.state,
          initialEmployees: res.data.results,
          displayEmployees: res.data.results
        })
      ).catch(err => console.log(err));
      // console.log(this.state.employees);
  }

  handleInputChange = event => {
    const search = event.target.value;

    this.setState(prevState => ({
      displayEmployees: search.length > 0 
        ? this.searchEmployee(search, prevState.initialEmployees)
        : prevState.initialEmployees
    }));
    // console.log(this.state.search);
  };

  searchEmployee = (search, data) => {
    return data.filter(employee => {
      const firstName = employee.name.first;
      const lastName = employee.name.last;
      const fullName = firstName.toLowerCase() + " " + lastName.toLowerCase();
      // console.log(fullName);

      return fullName.includes(search.toLowerCase());
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Container>
          <p>{this.state.search}</p>
          <Row>
            <Searchbar
              handleInputChange={this.handleInputChange}
              searchEmployee={this.searchEmployee}
            />
          </Row>
        </Container>
        <Container>
          <Row>
            {this.state.displayEmployees.map(employee =>(
                <EmployeeCard
                  key={employee.email}
                  firstName={employee.name.first}
                  lastName={employee.name.last}
                  username={employee.login.username}
                  email={employee.email}
                  phone={employee.cell}
                />
            ))}
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default App;
