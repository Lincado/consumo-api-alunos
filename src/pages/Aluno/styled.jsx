import styled from "styled-components";

import * as colors from "../../config/colors"

export const Form = styled.form `
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
  
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

export const Title = styled.h1 `
text-align: center;
`

export const ProfilePicture = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0 2rem;
  position: relative;
  margin-top: 2rem;

  img {
    width: 18rem;
    height: 18rem;
    border-radius: 50%;
  }

  a {
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    border: none;
    bottom: 0;
    color: #FFF;
    background: ${colors.primaryColor};
    width: 3.6rem;
    border-radius: 50%;
    padding: .5rem;
  }
`

