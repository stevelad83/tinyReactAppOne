import React from "react";
import Cell from "./Cell";
import "../App.css";
import _ from "lodash";

class Board extends React.Component {
  state = {
    boardState: [
      ["", "", ""], ["", "", ""], ["", "", ""]
    ],

    turn: "x",
  };

  render() {
    return (
      <div>
        <table id="simple-board">
          <tbody>
            <tr id="row0">
              <Cell markBox={this.markSquare} mark={this.state.boardState} loc="0-0" />
              <Cell markBox={this.markSquare} mark={this.state.boardState} loc="0-1" />
              <Cell markBox={this.markSquare} mark={this.state.boardState} loc="0-2" />
            </tr>
            <tr id="row1">
              <Cell markBox={this.markSquare} mark={this.state.boardState} loc="1-0" />
              <Cell markBox={this.markSquare} mark={this.state.boardState} loc="1-1" />
              <Cell markBox={this.markSquare} mark={this.state.boardState} loc="1-2" />
            </tr>
            <tr id="row2">
              <Cell markBox={this.markSquare} mark={this.state.boardState} loc="2-0" />
              <Cell markBox={this.markSquare} mark={this.state.boardState} loc="2-1" />
              <Cell markBox={this.markSquare} mark={this.state.boardState} loc="2-2" />
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  markSquare = (loc, turn) => {
    if (this.state.boardState[parseInt(loc[0])][parseInt(loc[2])] === "") {
      this.setState((currState) => {
        console.log(loc);
        const oldBoardState = _.cloneDeep(currState.boardState);
        oldBoardState[parseInt(loc[0])][parseInt(loc[2])] = currState.turn;
        const newState = {
          boardState: oldBoardState,
          turn: currState.turn === "x" ? "o" : "x",
        };
        console.log(newState)
        return newState;
      })
    }
  }
}

export default Board;
