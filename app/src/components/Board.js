import React, { useState } from "react";
import Square from "./Square";

export default function Board() {
  let [squares, setSquares] = useState(Array(9).fill(null));
  let [xIsNext, setXIsNext] = useState(true);

  const handleClick = (i) => {
    console.log(squares);
    let copy = squares.slice();

    // don't handle click if square already filled
    if (squares[i]) {
      return;
    }

    copy[i] = xIsNext ? "X" : "O";
    setSquares(copy);
    setXIsNext(!xIsNext);
  };

  const renderSquare = (i) => {
    return <Square value={squares[i]} handleClick={() => handleClick(i)} />;
  };

  const status = `Next player: ${xIsNext ? "X" : "O"}`;

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
