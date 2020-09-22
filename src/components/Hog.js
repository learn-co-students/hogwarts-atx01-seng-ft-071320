import React, { PureComponent } from 'react';


class Hog extends PureComponent {
    state = {
        showDetails: false
    }

    render() {
        const hog = this.props.hog;
        return (
            <div className="pigTile" onClick={() => this.setState({ showDetails: !this.state.showDetails })}>
                <h3>{hog.name}</h3>
                <img
                    src={`hog-imgs/${hog.name.toLowerCase().split(' ').join('_')}.jpg`}
                    alt={hog.name}
                />

                {this.state.showDetails ? (
                    <div>
                        <ul>
                            <li>{hog.greased ? 'Greased!' : 'Not greased :('}</li>
                            <li>Weight: {hog.weight}</li>
                            <li>Specialty: {hog.specialty}</li>
                            <li>Medal: {hog['highest medal achieved']}</li>
                        </ul>
                    </div>
                ) : (
                        ''
                    )}

                {/* <img src={"hog-imgs/cherub.jpg"} alt={"Pic of Pig"} /> */}
            </div>
        );
    }
}

export default Hog;