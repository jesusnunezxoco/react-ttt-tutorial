import React, { useState } from "react";
import Square from "./Square";

export default function Board() {
  let [squares, setSquares] = useState(Array(9).fill(null));
  let [xIsNext, setXIsNext] = useState(true);

  const handleClick = (i) => {
    console.log(squares);
    let copy = squares.slice();

    // don't handle click if square already filled
    if (squares[i]) return;
     // don't handle click if there's already a winner
    if(calculateWinner(copy)) return;
    

    copy[i] = xIsNext ? "X" : "O";
    setSquares(copy);
    setXIsNext(!xIsNext);
  };

  const renderSquare = (i) => {
    return <Square value={squares[i]} handleClick={() => handleClick(i)} />;
  };

  const winner = calculateWinner(squares);
  let status

  if (winner) {
    status = `Winner: ${winner}`
  } else {
    status = `Next Player: ${xIsNext ? "X" : "O"}`
  }

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
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