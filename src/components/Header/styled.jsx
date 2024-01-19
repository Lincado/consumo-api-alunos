import styled from "styled-components";
import { primaryColor } from "../../config/colors";

export const Nav = styled.nav`
  background: ${primaryColor};
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFFFFF;

  a {
    color: #FFFFFF;
    margin: 0 1rem 0 0;
    font-weight: bold;
  }
`
