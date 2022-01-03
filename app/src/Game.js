import React from "react";
import Board from "./components/Board";

// parent component similar to App.js in our previous projects

export default class Game extends React.Component {
  // state is in the Game component to easily share state accross its children

  constructor(props) {
    super(props);
    this.state = { history: [{ squares: Array(9).fill(null) }], xIsNext: true, stepNumber: 0 };
  }

  handleClick = (i) => {
    // history makes copy up to stepNumber + 1 in case a new choice is made when time traveling
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    // make copy of current squares state
    let copy = current.squares.slice();
    //  don't fire:
    //  if the square is already filled (since it will have a string instead of a null)
    if (copy[i]) return;
    //  if there's  already a winner determined
    if (calculateWinner(copy)) return;

    // update the copy
    // if xIsNext is true, then return string "X"
    // else return string "O"
    copy[i] = this.state.xIsNext ? "X" : "O";

    this.setState({
      // will replace squares with the updated copy
      // use concat to add the history log to the end of history state w/o mutating original state
      history: history.concat([{ squares: copy }]),
      // will flip who is next
      xIsNext: !this.state.xIsNext,
      stepNumber: history.length
    });
  };


  jumpTo(step) {
    this.setState({
      stepNumber: step,
      // if the stepNumber is even, then x is Next
      xIsNext: (step % 2) === 0,
    })
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);
    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }

    // creates a new button with the
    const moves = history.map((step, move) => {
      const desc = move ? "Go to move #" + move : "Go to game start";
      return (
        <li key={move}>
          {" "}
          <button onClick={() => this.jumpTo(move)}>{desc}</button>{" "}
        </li>
      );
    });

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            handleClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
