import React from "react";

import styled from "@emotion/styled";

const Button = styled.button`
  background: lightblue;

  border: 1px solid #999;
  float: left;
  font-size: 35px;
  font-weight: bold;
  line-height: 50px;
  height: 50px;
  margin-right: -1px;
  margin-top: -1px;
  padding: 0;
  text-align: center;
  width: 50px;
  outline: none;
`;

export default function Square({ value, onClick }) {
  return <Button onClick={onClick}>{value}</Button>;
}
