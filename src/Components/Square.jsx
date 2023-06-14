import React from "react";

const Square = ({ squares, index, onSquareClick }) => {
  return (
    <button
      className={`square ${squares[index]}`}
      onClick={onSquareClick.bind({}, index)}
    >
      {squares[index]}
    </button>
  );
};

export default Square;
