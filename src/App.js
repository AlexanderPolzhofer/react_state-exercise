import './App.css';
import Vote from "./components/Vote.js";
import { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      xVotes: 0,
      yVotes: 0
    }
  }

  votes = (numberofvotes, name) => {

    if (name == "Kandidat X") {
      this.setState({
        xVotes: numberofvotes
      })
    } else {
      this.setState({
        yVotes: numberofvotes
      })
    }
  }

  render() {
    return (
      <div className="App">
        <div className="heading">Summe: {this.state.xVotes + this.state.yVotes}</div>
        <div className="app-container">
          <Vote name="Kandidat X" onIncrement={this.votes} />
          <Vote name="Kandidat Y" onIncrement={this.votes} />
        </div>
      </div>
    );
  }
}

export default App;
