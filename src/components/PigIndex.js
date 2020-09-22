import React, { PureComponent } from 'react';
import Hog from "./Hog"

class PigIndex extends PureComponent {

    render() {
        return (
            <div className="ui grid container">
                {this.props.hogs.map((hog, index) => <Hog key={index} hog={hog} />)}
            </div>);
    }
}

export default PigIndex;













    // randomKeyGenerator = () => {
    //     Math.floor(Math.random() * 10000)
    // }
