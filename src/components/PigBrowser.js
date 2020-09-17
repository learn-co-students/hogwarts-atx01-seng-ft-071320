import React, { Fragment } from "react";
import Pig from "./Pig.js"

class PigBrowser extends React.Component {

  getPigImage = (pig) => {
    if (pig.name.includes(" ")) {
      let newName = pig.name.split(" ").join("_").toLowerCase()
      let pigPics = require(`./hog-imgs/${newName}.jpg`);
      return pigPics
    } else {
      let newName = pig.name.toLowerCase()
      let pigPics = require(`./hog-imgs/${newName}.jpg`);
      return pigPics
    }
  }

  onPigClick = (e) => {
    console.log(e.target.parentElement.childNodes[2])
    if (e.target.parentElement.childNodes[2].style.display === "none") {
      e.target.parentElement.childNodes[2].style.display = "block"
    } else {
      e.target.parentElement.childNodes[2].style.display = "none"
    }

  }

  // onClick (if display is none, display block. if display block, display none.)
  render() {

    return (
      <div>
        {this.props.pigs.map((pig, index) =>
          <div className="pigTile" key={index} onClick={this.onPigClick}> 
            <h1>{pig.name}</h1>
            <img src={this.getPigImage(pig)}/>
            <Pig pig={pig} />
          </div>)}
      </div>
    );
  }
}

export default PigBrowser;
