import React from "react";
import Square from "./Square";

export default class Board extends React.Component {
  

  // function called renderSquare that will take a number, `i`
  renderSquare(i) {
    // created a prop called `value`
    // the `i` parameter gets passed to `Square` through the `value` prop
    return (
      <Square
        value={this.props.squares[i]}
        // I kept the prop the same name as the function so I get less confused
        handleClick={() => this.props.handleClick(i)}
      />
    );
  }

  render() {
   

    return (
      <div>
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

