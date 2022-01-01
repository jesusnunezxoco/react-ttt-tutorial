import React from "react";
import Square from "./Square";

export default class Board extends React.Component {
  // state is in the Board component to easily share state accross its children
  constructor(props) {
    super(props);
    this.state = { squares: Array(9).fill(null) };
  }



  handleClick = (i) => {
    console.log("clicked square #", i);
    // make copy of squares state
    let copy = this.state.squares.slice()
    // update the copy
    copy[i] = "X"
    this.setState({squares: copy})
    
  };

  // function called renderSquare that will take a number, `i`
  renderSquare(i) {
    // created a prop called `value`
    // the `i` parameter gets passed to `Square` through the `value` prop
    return (
      <Square 
      value={this.state.squares[i]}
      handleClick ={() => this.handleClick(i)}  />
    )
  }

  render() {
    const status = "Next player: X";

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
