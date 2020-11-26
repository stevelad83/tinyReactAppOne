import React from "react";
import Cell from "./Cell";

class Board extends React.Component {
  render() {
    return (
      <div>
        <table id="simple-board">
          <tbody>
            <tr id="row0">
              <Cell loc="0-0" />
              <Cell loc="0-1" />
              <Cell loc="0-2" />
            </tr>
            <tr id="row1">
              <Cell loc="1-0" />
              <Cell loc="1-1" />
              <Cell loc="1-2" />
            </tr>
            <tr id="row2">
              <Cell loc="2-0" />
              <Cell loc="2-1" />
              <Cell loc="2-2" />
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Board;
