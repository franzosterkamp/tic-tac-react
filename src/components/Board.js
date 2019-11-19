import React from "react";
import Square from "./Square";
import { calculateWinner } from "./Winner";

export default function Board() {
  const [squares, setSquare] = React.useState(Array(16).fill(null));
  const [xIsNext, setXIsNext] = React.useState(true);

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Next player : ${xIsNext ? "X" : "o"}`;
  }

  console.log(calculateWinner(squares));

  function handleClick(index) {
    if (squares[index] || winner) {
      return;
    }
    const squaresCopy = [...squares];
    if (xIsNext) {
      squaresCopy[index] = "X";
      setXIsNext(false);
    } else {
      squaresCopy[index] = "o";
      setXIsNext(true);
    }
    setSquare(squaresCopy);
  }

  return (
    <div>
      <div className="status"> {status}</div>
      <div className="board-row">
        <Square value={squares[0]} onClick={() => handleClick(0)} />
        <Square value={squares[1]} onClick={() => handleClick(1)} />
        <Square value={squares[3]} onClick={() => handleClick(3)} />
        <Square value={squares[4]} onClick={() => handleClick(4)} />
      </div>
      <div className="board-row">
        <Square value={squares[5]} onClick={() => handleClick(5)} />
        <Square value={squares[6]} onClick={() => handleClick(6)} />
        <Square value={squares[7]} onClick={() => handleClick(7)} />
        <Square value={squares[8]} onClick={() => handleClick(8)} />
      </div>
      <div className="board-row">
        <Square value={squares[9]} onClick={() => handleClick(9)} />
        <Square value={squares[10]} onClick={() => handleClick(10)} />
        <Square value={squares[11]} onClick={() => handleClick(11)} />
        <Square value={squares[12]} onClick={() => handleClick(12)} />
      </div>
      <div className="board-row">
        <Square value={squares[13]} onClick={() => handleClick(13)} />
        <Square value={squares[14]} onClick={() => handleClick(14)} />
        <Square value={squares[15]} onClick={() => handleClick(15)} />
        <Square value={squares[16]} onClick={() => handleClick(16)} />
      </div>
    </div>
  );
}
