import { Component } from "react";
import CardList from "./components/card-list/card-list.component";
class App extends Component {
  constructor(props) {
    super(props);
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

  render() {
    return (
      <div>
        <input
          type="search"
          placeholdder="Search Monsters..."
          onChange={(e) =>
            this.setState({ searchField: e.target.value })
          }
        />
        <CardList monsters={this.state.monsters} />
      </div>
    );
  }
}

export default App;
