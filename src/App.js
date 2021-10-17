import React from "react";
import "./App.css";
import CardList from "./components/card-list/CardList";
import { SearchBox } from "./components/searchbox/SearchBox";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  searchHandler = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((fMonster) => {
      return fMonster.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return (
      <div className="App">
        <h1 className="a-title">Monsters Rolodex</h1>
        <SearchBox
          placeholder="Search Monster"
          searchHandler={this.searchHandler}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
