import React, { useState } from 'react';
import votestyle from "./Vote.module.css";

const Vote = ({ onIncrement, name }) => {

    const [numberOfVotes, setNumberOfVotes] = useState(0);

    const incrementVotes = () => {
        let newAmountOfVotes = numberOfVotes + 1;
        setNumberOfVotes(newAmountOfVotes);

        onIncrement(newAmountOfVotes, name);
    }

    return (
        <div className={votestyle.card} onClick={incrementVotes}>
            <div className={votestyle.item}>{name}</div>
            <div className={votestyle.item}>{numberOfVotes}</div>
        </div>
    );
}

export default Vote;