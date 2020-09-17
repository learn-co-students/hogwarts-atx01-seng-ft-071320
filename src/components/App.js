import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import Filters from "./Filters"
import hogs from "../porkers_data";
import HogContainer from "./HogContainer";

class App extends Component {
  constructor() {
    super()
    this.state = {
      hogs: hogs
    }
  }

  filterHogs = (newhogs) => {
    console.log('hog filter')
    this.setState({
      hogs: newhogs
    })
  }

  sortByName = () => {
    let newHogs = [...this.state.hogs]
    newHogs.sort((a, b) => (a.name > b.name) ? 1 : -1)
    this.setState({
      hogs: newHogs
    })
  }

  sortByWeight = () => {
    let newHogs = [...this.state.hogs]
    newHogs.sort((a, b) => (a.weight < b.weight) ? 1 : -1)
    this.setState({
      hogs: newHogs
    })
  }

  render() {
    console.log(hogs)
    return (
      <div className="App">
        <Nav />
        <button onClick={this.sortByName}>Sort By Name</button>
        <button onClick={this.sortByWeight}>Sort By Weight</button>
        <Filters filterHogs={this.filterHogs} allHogs={hogs} />
        <HogContainer allHogs={this.state.hogs} />
      </div>
    );
  }
}

export default App;
