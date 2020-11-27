import React from "react";
import _ from "lodash";
import Board from "./board";

class Cell extends React.Component {
  render() {
    return (
      <td
        className={"cell " + this.props.mark[parseInt(this.props.loc[0])][
          parseInt(this.props.loc[2])
        ]}
        onClick={() => this.props.markBox(this.props.loc, this.props.turn)}
      >
        {
          this.props.mark[parseInt(this.props.loc[0])][
          parseInt(this.props.loc[2])
          ]
        }
      </td>
    );
  }
}

export default Cell;
