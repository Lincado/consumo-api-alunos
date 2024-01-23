// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import get from "lodash";
import { FaUserCircle, FaEdit, FaWindowClose, FaExclamation } from "react-icons/fa";

import axios from "../../services/axios";
import { Container } from "../../styles/GlobalStyles"
import { AlunoContainer, ProfilePicture, NewStudent } from "./styled"
import Loading from "../../components/Loading"
import { toast } from "react-toastify";

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
  const handleDeleteAsk = (e) => {
    e.preventDefault();
    const exclamationIcon = e.currentTarget.nextSibling;
    exclamationIcon.setAttribute("display", "block");
    e.currentTarget.remove();
  }

  const handleDeleteStudent = async (e, id, index) => {
    e.persist()
    try {
      setIsLoading(true);
      await axios.delete(`/alunos/${id}`);
      const newAlunos = [...alunos];
      newAlunos.splice(index, 1);
      setAlunos(newAlunos);
      setIsLoading(false);
    } catch (err) {
      const errors = get(err, "response.data.errors", []);
      const status = get(err, "response.status", 0);
      if (status === 401) {
        toast.error("Você precisa fazer login");
      } else {
        toast.error("Ocorreu um erro ao excluir aluno");
      }
      errors.map(error => toast.error(error));
      setIsLoading(false);
    }
  }

  return (
    <>
      <Container>
        <Loading isLoading={isLoading} />
        <h1>Alunos</h1>

        <NewStudent to="/aluno/">Novo aluno</NewStudent>

        <AlunoContainer>
          {alunos.map((aluno, index) => (
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
              <Link onClick={handleDeleteAsk} to={`/aluno/${aluno.id}/delete`}>
                <FaWindowClose size={16} className="icon" />
              </Link >
              <FaExclamation
                onClick={e => handleDeleteStudent(e, aluno.id, index)}
                size={16}
                className="icon"
                display={"none"} cursor={"pointer"} />
            </div>
          ))}
        </AlunoContainer>
      </Container>
    </>
  )
}