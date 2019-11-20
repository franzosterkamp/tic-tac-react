import React from "react";
import Game from "./components/Game";
import styled from "@emotion/styled";

const AppContainer = styled.div`
  text-align: center;
  background-color: lightgrey;
  min-height: 100vh;
  padding: 20px;
  font-size: calc(10px + 2vmin);
  color: white;
`;

function App() {
  return (
    <AppContainer className="App">
      <h1>Tic-Tac-React</h1>
      <Game />
    </AppContainer>
  );
}

export default App;
