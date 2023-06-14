import React from "react";
import Square from "./Square";
import calculateWinner from "../common/calculateWinner";

import "./../game.css";

const Board = ({ xIsNext, squares, onPlay }) => {
  const onSquareClick = (index) => {
    if (squares[index]) {
      return;
    }

    const nextSquares = [...squares];

    if (xIsNext) {
      nextSquares[index] = "X";
    } else {
      nextSquares[index] = "O";
    }

    onPlay(nextSquares);
  };
  return (
    <>
      <div className="board-row">
        <Square squares={squares} index={0} onSquareClick={onSquareClick} />
        <Square squares={squares} index={1} onSquareClick={onSquareClick} />
        <Square squares={squares} index={2} onSquareClick={onSquareClick} />
      </div>
      <div className="board-row">
        <Square squares={squares} index={3} onSquareClick={onSquareClick} />
        <Square squares={squares} index={4} onSquareClick={onSquareClick} />
        <Square squares={squares} index={5} onSquareClick={onSquareClick} />
      </div>
      <div className="board-row">
        <Square squares={squares} index={6} onSquareClick={onSquareClick} />
        <Square squares={squares} index={7} onSquareClick={onSquareClick} />
        <Square squares={squares} index={8} onSquareClick={onSquareClick} />
      </div>

      <div>next Player: {xIsNext ? "X" : "O"}</div>
      <div>Winner: {calculateWinner(squares)}</div>
    </>
  );
};

export default Board;
