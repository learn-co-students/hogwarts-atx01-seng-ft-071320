import React, { Fragment } from "react";
import Hog from './Hog.js'

class HogContainer extends React.Component {
  render() {
    let i = 0
    let hogCards = this.props.allHogs.map(hog => (
      <Hog hog={hog} key={++i} />
    ))
    console.log(i)
    return (
      <div className='ui grid container'>
        {hogCards}
      </div >
    );
  }
}

export default HogContainer;
