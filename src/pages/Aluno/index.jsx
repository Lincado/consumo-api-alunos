// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import { useDispatch } from "react-redux"; // dispara ações pro redux ouvir

import { Container } from "../../styles/GlobalStyles"
import axios from "../../services/axios";
import * as exampleAction from "../../store/modules/example/actions"

// eslint-disable-next-line react-refresh/only-export-components, react/display-name
export default () => {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();

    dispatch(exampleAction.buttonClickedRequest());
  }

  return (
    <>
    <Container>
      <h1>Aluno</h1>
    </Container>
    </>
  )
}