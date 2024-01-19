import styled from "styled-components";

import * as colors from "../../config/colors";

export const AlunoContainer = styled.div `
  margin-top: 2rem;
  color: #000000;
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: .5rem 0;
  }
  div + div {
    border-top: .1rem solid #eee;
  }
  span {
    font-size: 1.6rem;
  }
  .icon {
    color: ${colors.primaryColor};
  }

  /* .icon-exclamation {
    color: ${colors.primaryColor};
    display: none;
    cursor: pointer;
  } */
`


export const ProfilePicture = styled.div `
  img {
    width: 3.6rem;
    height: 3.6rem;
    border-radius: 50%;
  }
`