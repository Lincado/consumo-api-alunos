// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import get from "lodash";
import { FaUserCircle, FaEdit, FaWindowClose } from "react-icons/fa";
import { useDispatch } from "react-redux"; // dispara ações pro redux ouvir

import axios from "../../services/axios";
import * as exampleAction from "../../store/modules/example/actions"
import { Container } from "../../styles/GlobalStyles"
import { AlunoContainer, ProfilePicture } from "./styled"
import Loading from "../../components/Loading"

// eslint-disable-next-line react-refresh/only-export-components, react/display-name
export default () => {
  const [alunos, setAlunos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        const response = await axios.get("/alunos/");
        setAlunos(response.data);
        setIsLoading(false);
      } catch (e) {
        console.log("erro na requisição")
      }
    }
    getData();
  }, [])

  return (
    <>
      <Container>
        <Loading isLoading={isLoading} />
        <h1>Alunos</h1>
        <AlunoContainer>
          {alunos.map(aluno => (
            <div key={aluno.id}>
              <ProfilePicture>
                {aluno.Fotos?.[0]?.url ? (
                  <img src={aluno.Fotos[0].url} alt="" />
                ) : (
                  <FaUserCircle size={36} />
                )}
              </ProfilePicture>
              <span>{aluno.nome}</span>
              <span>{aluno.email}</span>
              <Link to={`/aluno/${aluno.id}/edit`}>
                <FaEdit size={16} className="icon" />
              </Link >
              <Link to={`/aluno/${aluno.id}/delete`}>
                <FaWindowClose size={16} className="icon" />
              </Link >
            </div>
          ))}
        </AlunoContainer>
      </Container>
    </>
  )
}