import { useState } from "react";
import Board from "./Components/Board";
import calculateWinner from "./common/calculateWinner";

function Game() {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [historyIndex, setHistoryIndex] = useState(0);
  const currentSquares = history[historyIndex];

  function handlePlay(nextSquares) {
    const winner = calculateWinner(currentSquares);
    if (winner) {
      return;
    }
    const newHistory = [...history.slice(0, historyIndex + 1), nextSquares];
    setHistory(newHistory);
    setXIsNext(!xIsNext);
    setHistoryIndex(newHistory.length - 1);
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>
          {history.map((index) => {
            return (
              <li key={`history-${index}`}>
                <button
                  onClick={() => {
                    console.log(`Clicked button number ${index}`);
                    setHistoryIndex(index);
                    setXIsNext(index % 2 === 0);
                  }}
                >
                  Go to Play {index === 0 ? "start" : index}
                </button>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}

export default Game;
