import styled, { createGlobalStyle } from "styled-components"

const Global = createGlobalStyle`
  body {
    font-family: "rubik","rubiklight","rubikitalic","rubikbold_italic", "rubikbold","rubikblack","rubikmedium", sans-serif;
    font-size: 14px;
    line-height: 22px;
    color: #4c4d4d;
    -webkit-font-smoothing: antialiased;
  }

  h1,h2,h3,h4,h5,h6 {
    font-family: "rubik", sans-serif;
    color: #1e1d1c;
    font-weight: 430;
    line-height: 1.2;
    margin-bottom: 0.5rem;
  }
  
  p {
    font-family: "rubik", sans-serif;
    line-height: 1.9;
  }

  button {
    font-family: "rubik", sans-serif;
    line-height: 1.5;
    font-weight: 680;
  }

  input[type=email],
  input[type=password],
  input[type=text],
  textarea {
    line-height: 1.5;
    font-size: 1rem;
    outline-color: #2dbe60;
    
    &::placeholder {
      opacity: 0.5;
    }
  }
`
export default Global;