import React, { Component } from 'react';

class Pig extends Component {


    render() { 
        const pig = this.props.pig
        return (  
            <div className="pigData">
              <h2>Specialty: {pig.specialty}</h2>
              <h3>{pig.greased}</h3>
              <h4>Weight: {pig.weight}</h4>
              <h5>Highest Medal Achieved: {pig['highest medal achieved']}</h5>
            </div>
        );
    }
}
 
export default Pig;