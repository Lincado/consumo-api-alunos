import styled from "styled-components";

import * as colors from "../../config/colors";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
  gap: 3rem;

  label {
    width: 18rem;
    height: 18rem;
    display: flex;
    background: #EEE;
    border: .5rem dashed ${colors.primaryColor};
    margin: 3rem auto;
    cursor: pointer;
    border-radius: 50%;
    font-size: 1.6rem;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  input {
    display: none;
  }

  
  img {
    width: 18rem;
    height: 18rem;
  }

`

export const Title = styled.h1`
  text-align: center;
`