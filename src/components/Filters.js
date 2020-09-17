import React from 'react'

class Filters extends React.Component {

    onChange = (event) => {
        console.log(event)
        let filteredHogs
        if (event.target.value == 'greased') {
            filteredHogs = this.props.allHogs.filter(hog => hog.greased === true)
        } else if (event.target.value == 'not greased') {
            filteredHogs = this.props.allHogs.filter(hog => hog.greased === false)
        } else {
            filteredHogs = this.props.allHogs
        }
        this.props.filterHogs(filteredHogs)
    }

    render() {
        return (
            <div className="ui form">
                <h3>Greased</h3>
                <div className="grease select">
                    <select onChange={event => this.onChange(event)} >
                        <option value="all">All</option>
                        <option value="greased">Greased</option>
                        <option value="not greased">Not Greased</option>
                    </select>
                </div>
            </div>
        )
    }
}

export default Filters
