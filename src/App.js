import React from "react";
import Searchbar from "./components/SearchBar/Searchbar";
import Sort from "./components/Sort/Sort";
import EmployeeCard from "./components/EmployeeCard/EmployeeCard";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Row from "./components/Row/Row";
import Col from "./components/Column/Column"
import Container from "./components/Container/Container";
import API from "./utils/API";
// import allEmployees from "./employee.json";


class App extends React.Component {
  state = {
    initialEmployees: [],
    displayEmployees: [],
    search: "",
    sort: ""
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

  sortEmpAscending = () => {
    const sortedEmployees = [].concat(this.state.initialEmployees)
      .sort((a, b) => a.name.first < b.name.first ? 1 : -1);

      return this.setState({
        ...this.state,
        displayEmployees: sortedEmployees
      });
  }

  sortEmpDecending = () => {
    const sortedEmployees = [].concat(this.state.initialEmployees)
      .sort((a, b) => a.name.first > b.name.first ? 1 : -1);

      return this.setState({
        ...this.state,
        displayEmployees: sortedEmployees
      });
  }

  handleSortChange = event => {
    event.preventDefault();
    const value = event.target.value;
    this.setState({
      ...this.state,
      sort: value
    })
    console.log(this.state.sort);
  }

  handleSort = event => {
    event.preventDefault();
    const value = event.target.getAttribute("value");
    this.setState({
      ...this.state,
      sort: value
    })
    if (this.state.sort === "decending") {
      this.sortEmpDecending();
    } else if (this.state.sort === "ascending") {
      this.sortEmpAscending();
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Container>
          <p>{this.state.search}</p>
          <Row>
            <Col size="8">
              <Searchbar
                handleInputChange={this.handleInputChange}
                searchEmployee={this.searchEmployee}
              />
            </Col>
            <Col size="4">
              <Sort
                value={this.state.sort}
                handleSort={this.handleSort}
                onChange={this.handleSortChange}
                sortA-Z={this.sortEmpDecending}
                sortZ-A={this.sortEmpAscending}
              />
            </Col>
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
