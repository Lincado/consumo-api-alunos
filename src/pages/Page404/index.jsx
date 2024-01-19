// eslint-disable-next-line no-unused-vars
import React from "react";
import {FaUnlink} from "react-icons/fa";

import { Container } from "../../styles/GlobalStyles"
import { Title } from "./styled"

// eslint-disable-next-line react-refresh/only-export-components, react/display-name
export default function Page404() {
  return (
    <>
    <Container>
      <Title>Essa pagina não existe <FaUnlink size={20} /> </Title>
    </Container>
    </>
  )
}