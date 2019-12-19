import styled, { createGlobalStyle } from "styled-components"

const Global = createGlobalStyle`
  body {
    font-family: "rubikregular","rubiklight","rubikitalic","rubikbold_italic", "rubikbold","rubikblack","rubikmedium", sans-serif;
    font-size: 14px;
    line-height: 22px;
    color: #4c4d4d;
    -webkit-font-smoothing: antialiased;
  }

  h1,h2,h3,h4,h5,h6 {
    font-family: "rubikmedium", sans-serif;
    color: #1e1d1c;
  }

  p {
    font-family: "rubikregular", sans-serif;
    line-height: 1.9;
  }

  button {
    font-family: "rubikmedium", sans-serif;
    line-height: 1.5;
  }

  input[type=email],
  input[type=password] {
    line-height: 1.5;
    font-size: 1rem;
  }
`
export default Global;