import React from "react";
import Cell from "./Cell";
import "../App.css";
import _ from "lodash";

class Board extends React.Component {
  state = {
    winner: null,
    boardState: [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ],

    turn: "x",
  };

  render() {
    return (
      <div>
        <table id="simple-board">
          <tbody>
            <tr id="row0">
              <Cell
                markBox={this.markSquare}
                mark={this.state.boardState}
                loc="0-0"
              />
              <Cell
                markBox={this.markSquare}
                mark={this.state.boardState}
                loc="0-1"
              />
              <Cell
                markBox={this.markSquare}
                mark={this.state.boardState}
                loc="0-2"
              />
            </tr>
            <tr id="row1">
              <Cell
                markBox={this.markSquare}
                mark={this.state.boardState}
                loc="1-0"
              />
              <Cell
                markBox={this.markSquare}
                mark={this.state.boardState}
                loc="1-1"
              />
              <Cell
                markBox={this.markSquare}
                mark={this.state.boardState}
                loc="1-2"
              />
            </tr>
            <tr id="row2">
              <Cell
                markBox={this.markSquare}
                mark={this.state.boardState}
                loc="2-0"
              />
              <Cell
                markBox={this.markSquare}
                mark={this.state.boardState}
                loc="2-1"
              />
              <Cell
                markBox={this.markSquare}
                mark={this.state.boardState}
                loc="2-2"
              />
            </tr>
          </tbody>
        </table>
        <h1>{this.state.winner ? `${this.state.winner} wins!` : ""}</h1>
      </div>
    );
  }

  markSquare = (loc, turn) => {
    if (
      this.state.boardState[parseInt(loc[0])][parseInt(loc[2])] === "" &&
      !this.state.winner
    ) {
      this.setState(
        (currState) => {
          console.log(loc);
          const oldBoardState = _.cloneDeep(currState.boardState);
          oldBoardState[parseInt(loc[0])][parseInt(loc[2])] = currState.turn;
          const newState = {
            boardState: oldBoardState,
            turn: currState.turn === "x" ? "o" : "x",
            winner: this.checkWin(oldBoardState, currState.turn),
          };
          console.log(newState);
          return newState;
        }
        // () => {
        //   console.log(this.state.winner);
        //   if (this.state.winner) {
        //     alert("Winner!");
        //   }
      );
    }
  };

  checkWin = (board, turn) => {
    for (let row of board) {
      if (row.filter((x) => x === turn).length === 3) return turn;
    }
    for (let i = 0; i < 3; i++) {
      if (
        board[0][i] &&
        board[0][i] === board[1][i] &&
        board[1][i] === board[2][i]
      ) {
        return turn;
      }
    }
    if (board[0][0] === turn && board[1][1] === turn && board[2][2] === turn)
      return turn;
    if (board[0][2] === turn && board[1][1] === turn && board[2][0] === turn)
      return turn;
  };
}

export default Board;
