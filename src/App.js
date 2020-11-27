import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Board from "./Components/board";

//switch player 1
// reset board button
// score recorder
// flip between 1 and 2 player
// mp3 to play when win occurs

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Noughts and Crosses</h1>
          <Board />
        </header>
      </div>
    );
  }
}

export default App;
