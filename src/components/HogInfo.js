import React, { Component } from "react";

class HogInfo extends React.Component {
    render() {
        let hog = this.props.hog
        return(
            <div>
                <p>Specialty: {hog.specialty}</p>
                <p>Greased? {hog.greased.toString()}</p>
                <p>Weight: {hog.weight}</p>
                <p>Highest Medal: {hog['highest medal achieved']}</p>
            </div>
        )
    }
}

export default HogInfo