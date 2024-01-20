import styled from "styled-components";

import * as colors from "../../config/colors"

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  
  input {
    height: 4rem;
    font-size: 1.8rem;
    border: .1rem solid #ddd;
    padding: 0 1rem;
    border-radius: .5rem;
    transition: all 200ms ease-in-out;
    margin-top: .5rem;

      &:focus{
      border: solid .1rem ${colors.primaryColor};
    }
  }
  
  input + input {
    margin-top: 2rem;
  }

  input + button {
    margin-top: 3rem;
  }
`