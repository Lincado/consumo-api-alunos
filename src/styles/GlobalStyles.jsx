import { createGlobalStyle, styled } from "styled-components";

import * as colors from "../config/colors"; //pega todas as cores e cham como object colors.primaryDarkColor
import "react-toastify/dist/ReactToastify.css";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    font-size: 62.5%;
  }

  body {
    font-family: sans-serif;
    background: ${colors.primaryDarkColor};
    /* color: ${colors.primaryColor}; */
    font-size: 2.6rem;
  }

  html, body, #root {
    height: 100%
  }

  h1 {
    font-size: 2.5rem;
  }
  
  h2 {
    font-size: 2rem;
  }

  button {
    cursor: pointer;
    background: ${colors.primaryColor};
    border: none;
    color: #FFFFFF;
    padding: 1rem 2rem;
    font-weight: 700;
    border-radius: .5rem;
    font-size: 1.33rem;
    transition: all 300ms;
  }

  button:hover {
    background: #881236;
  }

  a {
    text-decoration: none;
    font-size: 1.6rem;
  }

  ul {
    list-style: none;
  }
  body .Toastify .Toastify__toast-container .Toastify__toast--success {
  background: ${colors.successColor};
  color: #FFFFFF;
  font-size: 4rem;
}

.Toastify__progress-bar--success {
  background: white;
}

body .Toastify .Toastify__toast-container .Toastify__toast--error {
  background: ${colors.errorColor};
  color: #FFFFFF;
  font-size: 4rem;
}

.Toastify__progress-bar--error {
  background: white;
}

.Toastify__toast-body .Toastify__toast-icon svg {
  fill: #FFFFFF
}

`;

export const Container = styled.section`
  max-width: 48rem;
  background: #fff;
  margin: 3rem auto;
  padding: 3rem;
  border-radius: .4rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
`;

