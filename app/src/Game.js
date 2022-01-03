import React, { useState } from "react";
import Board from "./components/Board";

// Parent comopnent - equivalent to App.js in class
export default function Game() {
  // history is an array of objects that contain a property, squares
  const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
  const [xIsNext, setXIsNext] = useState(true);
  const [stepNumber, setStepNumber] = useState(0);

  const handleClick = (i) => {
    let h = history.slice(0, stepNumber + 1)
    let current = h[h.length - 1];
    // make copy of current squares
    let copy = current.squares.slice();
    // don't handle click if square already filled
    if (current.squares[i]) return;
    // don't handle click if there's already a winner
    if (calculateWinner(copy)) return;

    copy[i] = xIsNext ? "X" : "O";
    setHistory(h.concat([{ squares: copy }]));
    setXIsNext(!xIsNext);
    setStepNumber(h.length)
  };

  const jumpTo = (step) => {
    setStepNumber(step)
    setXIsNext(step % 2 === 0)
  }

  const current = history[stepNumber];
  const winner = calculateWinner(current.squares);
  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Next Player: ${xIsNext ? "X" : "O"}`;
  }

  const moves = history.map((step, move) => {
    const desc = move ? "Go to move #" + move : "Go to game start";
    return (
      <li key={move}>
        {" "}
        <button onClick={() => jumpTo(move)}>{desc}</button>{" "}
      </li>
    );
  });
  return (
    <div className="game">
      <div className="game-board">
        <Board squares={current.squares} handleClick={(i) => handleClick(i)} />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
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
