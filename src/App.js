import './App.css';
import React, { useState } from 'react'
import Vote from "./components/Vote.js";

const App = () => {

  const [xVotes, setXVotes] = useState(0);
  const [yVotes, setYVotes] = useState(0);

  const votes = (numberofvotes, name) => {
    if (name === "Kandidat X") {
      setXVotes(numberofvotes)
    } else {
      setYVotes(numberofvotes)
    }
  }

  const amountOfVots = () => {
    return xVotes + yVotes;
  }

  return (
    <div className="App">
      <div className="heading">Summe: {amountOfVots()}</div>
      <div className="app-container">
        <Vote name="Kandidat X" onIncrement={votes} />
        <Vote name="Kandidat Y" onIncrement={votes} />
      </div>
    </div>
  );
}

export default App;
