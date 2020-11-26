import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Board from "./Components/board";

//make each cell a component child of board
//onclick turns to X or O
//state updates to X or O
//tracks states
//checks for winner on each update
//pop up for winner
//strikethrough line
//App and Board should be classes

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <Board />
          {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        </header>
      </div>
    );
  }


}

export default App;
