import React from "react";
import Square from "./Square";
import styled from "@emotion/styled";
import { calculateWinner } from "./Winner";
import Status from "./Status";

const SquareBox = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => Math.sqrt(props.size)}, 1fr);
  grid-template-rows: repeat(${props => Math.sqrt(props.size)}, 1fr);
  grid-gap: 5px;
  width: 150px;
  height: 150px;
`;

export default function Board({ gameSize }) {
  const [squares, setSquare] = React.useState(Array(gameSize).fill(null));
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
      <Status> {status}</Status>
      <SquareBox size={gameSize}>
        <Square value={squares[0]} onClick={() => handleClick(0)} />
        <Square value={squares[1]} onClick={() => handleClick(1)} />
        <Square value={squares[2]} onClick={() => handleClick(2)} />
        <Square value={squares[3]} onClick={() => handleClick(3)} />
        <Square value={squares[4]} onClick={() => handleClick(4)} />
        <Square value={squares[5]} onClick={() => handleClick(5)} />
        <Square value={squares[6]} onClick={() => handleClick(6)} />
        <Square value={squares[7]} onClick={() => handleClick(7)} />
        <Square value={squares[8]} onClick={() => handleClick(8)} />
      </SquareBox>
    </div>
  );
}
