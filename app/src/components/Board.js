import React from "react";
import Square from "./Square";

export default class Board extends React.Component {
  // state is in the Board component to easily share state accross its children
  constructor(props) {
    super(props);
    this.state = { squares: Array(9).fill(null), xIsNext: true };
  }

  handleClick = (i) => {
    console.log("clicked square #", i);
    // make copy of squares state
    let copy = this.state.squares.slice();
    // update the copy
    // if xIsNext is true, then return string "X"
    // else return string "O"
    copy[i] = this.state.xIsNext ? "X" : "O";

    this.setState({
      // will replace squares with the updated copy
      squares: copy,
      // will flip who is next
      xIsNext: !this.state.xIsNext,
    });
  };

  // function called renderSquare that will take a number, `i`
  renderSquare(i) {
    // created a prop called `value`
    // the `i` parameter gets passed to `Square` through the `value` prop
    return (
      <Square
        value={this.state.squares[i]}
        handleClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    const status = `Next player is: ${this.state.xIsNext ? "X" : "O"}`;

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

