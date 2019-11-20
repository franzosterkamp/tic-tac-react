import { Global, css } from "@emotion/core";
import React from "react";

export default function GlobalStyles() {
  return (
    <Global
      styles={css`
        *,
        *::after,
        *before {
          box-sizing: border-box;
        }
        body {
          color: green;
          padding: 0px;
          margin: 0;
          font-family: "Odibee Sans";
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `}
    />
  );
}
