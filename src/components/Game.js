import React from "react";
import Board from "./Board";
import styled from "@emotion/styled";

const FlexGame = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
`;

export default function Game() {
  return (
    <FlexGame>
      <Board gameSize={9} />
    </FlexGame>
  );
}
