// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import get from "lodash";
import { FaUserCircle, FaEdit } from "react-icons/fa"

import * as actions from "../../store/modules/auth/actions"
import axios from "../../services/axios"
import { Form, ProfilePicture, Title } from "./styled"
import { Container } from "../../styles/GlobalStyles"
import { toast } from "react-toastify";
import { isEmail, isInt, isFloat } from "validator";
import Loading from "../../components/Loading";



// eslint-disable-next-line react-refresh/only-export-components, react/display-name
export default function Aluno() {
  const { id } = useParams();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [idade, setIdade] = useState("");
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [foto, setFoto] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!id) return;

    const getData = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get(`/alunos/${id}`);
        const Foto = data.Fotos[0]?.url || "";
        setFoto(Foto);

        setNome(data.nome);
        setSobrenome(data.sobrenome);
        setEmail(data.email);
        setIdade(data.idade);
        setPeso(data.peso);
        setAltura(data.altura);

        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        const status = get(err, 'response.status', 0);
        const errors = get(err, 'response.data.errors', []);
        if (errors.length > 0) errors.map(error => toast.error(errors));

        if (status === 401) dispatch(actions.loginFailure());
        navigate('/');
      }
    }

    getData();
  }, [id, navigate, dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let formErrors = false;

    if (nome.length <= 3 || nome.length > 255) {
      formErrors = true;
      toast.error("Campo nome deve ter entre 3 e 255 caractere");
    }

    if (sobrenome.length < 3 || sobrenome.length > 255) {
      formErrors = true;
      toast.error("Campo sobrenome deve ter entre 3 e 255 caractere");
    }

    if (!isEmail(email)) {
      formErrors = true;
      toast.error("Insira um email válido");
    }

    if (!isInt(String(idade))) {
      formErrors = true;
      toast.error("Campo idade aceita apenas números");
    }

    if (!isFloat(String(peso))) {
      formErrors = true;
      toast.error("Campo peso aceita apenas números");
    }

    if (!isFloat(String(altura))) {
      formErrors = true;
      toast.error("Campo peso aceita apenas números");
    }

    if (formErrors) return

    try {
      setIsLoading(true);
      if (id) {
        //se tiver id esta editando
        await axios.put(`/alunos/${id}`, { nome, sobrenome, email, idade, peso, altura });
        toast.success("Aluno(a) editado(a) com sucesso");
      } else {
        //se não tiver id esta criando
        const { data } = await axios.post(`/alunos/`, { nome, sobrenome, email, idade, peso, altura });
        toast.success("Aluno(a) criado(a) com sucesso");
        navigate(`/aluno/${data.id}/edit`);
      }
      setIsLoading(false);
    } catch (error) {
      const data = get(error, "response.data", {});
      const status = get(data, "response.status", 0);
      const errors = get(data, "response.errors", []);

      if (errors.length > 0) {
        errors.map(err => toast.error(err));
      } else {
        toast.error("Erro desconhecido")
      }

      if (status === 401) dispatch(actions.loginFailure());

      setIsLoading(false);
    }
  }
  return (
    <>
      <Container>
        <Loading isLoading={isLoading} />
        <Title>{id ? "Editar Aluno" : "Novo Aluno"}</Title>

        {id && (
          <ProfilePicture>
            {foto ? (
              <img src={foto} alt={nome} crossOrigin="" />
            ) : (
              <FaUserCircle size={180} />
            )}
            <Link to={`/fotos/${id}/edit`}>
              <FaEdit size={24} />
            </Link>
          </ProfilePicture>
        )}


        <Form onSubmit={handleSubmit}>
          <input type="text"
            value={nome}
            onChange={e => setNome(e.target.value)}
            placeholder="Nome" />
          <input type="text"
            value={sobrenome}
            onChange={e => setSobrenome(e.target.value)}
            placeholder="Sobrenome" />
          <input type="text"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Email" />
          <input type="number"
            value={idade}
            onChange={e => setIdade(e.target.value)}
            placeholder="Idade" />
          <input type="text"
            value={peso}
            onChange={e => setPeso(e.target.value)}
            placeholder="Peso" />
          <input type="text"
            value={altura}
            onChange={e => setAltura(e.target.value)}
            placeholder="Altura" />
          <button type="submit">{id ? "Editar Aluno" : "Adicionar aluno"}</button>
        </Form>
      </Container>
    </>
  )
}
