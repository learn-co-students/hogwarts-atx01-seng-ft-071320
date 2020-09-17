import React, { Component } from "react";
import HogInfo from './HogInfo.js'

class Hog extends React.Component {

    state = {
        clicked: false
    }

    toggleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    renderHogImage = (hogName) => {
        let hogSplit = hogName.split(' ')
        let hogFilename = hogSplit.join('_').toLowerCase()
        return hogFilename
    }

    handleClick = (hog) => {
        console.log('hog detail')
        let desc = document.getElementById(`${hog.name}`)
        desc.innerHTML = `
        <p>Specialty: ${hog.specialty}</p>
        <p>Greased: ${hog.greased}</p>
        <p>Weight: ${hog.weight}</p>
        <p>Highest Medal Achieved: ${hog['highest medal achieved']}</p>

        `
    }

    render() {
        console.log(this.props.hog)
        let hog = this.props.hog
        let imageName = this.renderHogImage(hog.name)
        let hogImage = require(`../hog-imgs/${imageName}.jpg`)
        return (
            <div className='ui eight wide column'>
                <div className="ui card" onClick={this.toggleClick}>
                    <div className='image'>
                        <img src={hogImage} />
                    </div>
                    <div className='content'>
                        <h3>{hog.name}</h3>
                        <div className='description' id={hog.name}>
                            {this.state.clicked ? <HogInfo hog={hog} /> : null}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Hog;
