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

  turnCount = 0;

  markSquare = (loc, turn) => {
    if (
      this.state.boardState[parseInt(loc[0])][parseInt(loc[2])] === "" &&
      !this.state.winner
    ) {
      this.setState((currState) => {
        const oldBoardState = _.cloneDeep(currState.boardState);
        let currTurn = "x";
        oldBoardState[parseInt(loc[0])][parseInt(loc[2])] = currTurn;

        if (this.checkWin(oldBoardState, currTurn, this.turnCount)) {
          const newState = {
            boardState: oldBoardState,
            winner: this.checkWin(oldBoardState, currTurn, this.turnCount),
          };

          return newState;
        } else {
          currTurn = "o";

          let oppRow = Math.floor(Math.random() * 3);
          let oppColumn = Math.floor(Math.random() * 3);

          let counter = 0;
          while (counter++ < 100 && oldBoardState[oppRow][oppColumn]) {
            oppRow = Math.floor(Math.random() * 3);
            oppColumn = Math.floor(Math.random() * 3);
          }

          if (counter < 100) {
            oldBoardState[oppRow][oppColumn] = currTurn;

            this.turnCount++;
          }

          const newState = {
            boardState: oldBoardState,
            winner: this.checkWin(oldBoardState, currTurn, this.turnCount),
          };

          return newState;
        }
      });
    }
  };

  checkWin = (board, turn, turnCount) => {
    for (let row of board) {
      if (row.filter((x) => x === row[0] && x).length === 3) return row[0];
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

    if (turnCount === 8) return "No-one";
  };
}

export default Board;
