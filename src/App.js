import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Board from "./Components/board";




// strikethrough line
// title *
// draw notification
// reset board button
// score recorder
// mp3 to play when win occurs

// flip between 1 and 2 player

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
