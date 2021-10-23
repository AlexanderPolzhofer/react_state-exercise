import React, { Component } from 'react';
import votestyle from "./Vote.module.css";

class Vote extends Component {
    constructor(props) {
        super(props);
        this.state = { numberofvotes: 0 }
    }

    incrementVotes = () => {
        let newAmountOfVotes = this.state.numberofvotes + 1;
        this.setState({
            numberofvotes: newAmountOfVotes
        })

        this.props.onIncrement(newAmountOfVotes, this.props.name);

    }

    render() {
        return (
            <div className={votestyle.card} onClick={this.incrementVotes}>
                <div className={votestyle.item}>{this.props.name}</div>
                <div className={votestyle.item}>{this.state.numberofvotes}</div>
            </div>


        );
    }
}

export default Vote;