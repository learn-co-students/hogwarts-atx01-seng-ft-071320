import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import pigs from "../porkers_data";
import PigBrowser from "./PigBrowser";

class App extends Component {
  
  constructor(props) {
    super();

    this.state = {
      pigs: pigs,
      filter: "all"
    }
  } 

  onTileClick = (e) => {
    
  }
  
  render() {
    return (
      <div className="App">
        <Nav />
        <PigBrowser onTileClick={this.onTileClick} pigs={this.state.pigs}/>
      </div>
    );
  }
}

export default App;

// componentDidMount() {
//   // this.fetchPigs();
//   console.log(hogs)
// }

// fetchPigs = (filter = "all") => {
//   let url = "../porkers_data"
//   // if (filter !== "all") {
//   //   null
//   // }
//   fetch(url)
//     .then((res) => res.json())
//     .then((pigs) => console.log(pigs))
// }

