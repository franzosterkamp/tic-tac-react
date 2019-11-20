import React from "react";

import styled from "@emotion/styled";

const Button = styled.button`
  background: lightblue;

  border: 1px solid #999;
  float: left;
  font-size: 20px;
  font-weight: bold;
  margin-right: -1px;
  margin-top: -1px;
  padding: 1px;
  text-align: center;
  border: solid 1px black;
  outline: none;
`;

export default function Square({ value, onClick }) {
  return <Button onClick={onClick}>{value}</Button>;
}
