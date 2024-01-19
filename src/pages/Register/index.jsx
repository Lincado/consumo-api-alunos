// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { isEmail } from "validator";
import { useSelector, useDispatch } from "react-redux";

import { Container } from "../../styles/GlobalStyles";
import { Form } from "./styled";
import Loading from "../../components/Loading";
import * as actions from "../../store/modules/auth/actions"


// eslint-disable-next-line react-refresh/only-export-components, react/display-name
export default () => {
  const dispatch = useDispatch();

  const id = useSelector(state => state.auth.user.id);
  const nomeStored = useSelector(state => state.auth.user.nome);
  const emailStored = useSelector(state => state.auth.user.email);
  const isLoading = useSelector(state => state.auth.user.isLoading);


  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  useEffect(() => {
    if (!id) return;

    setNome(nomeStored);
    setEmail(emailStored);
  }, [id, nomeStored, emailStored]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formErrors = false;
    if (!id && (nome.length < 3 || nome.length > 255)) {
      formErrors = true;
      toast.error("Nome precisa ter entre 3 e 255 caracteres");
    }

    if (!isEmail(email)) {
      formErrors = true;
      toast.error("Email inválido");
    }

    if (!id && (password.length < 6 || password.length > 50)) {
      formErrors = true;
      toast.error("Senha precisa ter entre 6 e 50 caracteres");
    }
    if (formErrors) return

    const callback = (route) => navigate(route);

    dispatch(actions.registerRequest({ nome, email, password, id, callback }))
    //forma antiga de fazer post na api
    // setIsLoading(true);

    // try {

    //   await axios.post("/users/", { nome, password, email }); //faz post na base de dados da api
    //   toast.success("Conta criada");
    //   setIsLoading(false);
    //   navigate("/login/")
    // } catch (e) {
    //   // const status = get(e, "response.status", 0);
    //   const errors = get(e, "response.data.errors", []);
    //   errors.map(error => toast.error(error));
    //   setIsLoading(false);
    // } 
  }

  return (
    <>
      <Container>
        <Loading isLoading={isLoading} />
        <h1>{id ? "Editar dados" : "Crie sua conta"}</h1>

        <Form onSubmit={handleSubmit}>
          <label htmlFor="nome">
            Nome:
            <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Seu nome" />
          </label>
          <label htmlFor="email">
            E-mail:
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Seu email" />
          </label>
          <label htmlFor="password">
            Senha:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Sua senha" />

            <button>{id ? "Salvar dados" : "Criar minha conta"}</button>
          </label>
        </Form>
      </Container>
    </>
  )
}
