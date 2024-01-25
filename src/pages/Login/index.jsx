// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { isEmail } from "validator";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";


import { Container } from "../../styles/GlobalStyles";
import { Form } from "./styled";
import * as actions from "../../store/modules/auth/actions";
import Loading from "../../components/Loading"

// eslint-disable-next-line react-refresh/only-export-components, react/display-name
export default (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  
  const prevPath = location?.state?.prevPath || "/";

  const isLoading = useSelector(state => state.auth.isLoading);
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let errorForm = false;
    if(!isEmail(email)) {
      errorForm = true;
      toast.error("Email inválido");
    }
    if(password.length < 6 || password.length > 50) {
      errorForm = true;
      toast.error("Senha incorreta");
    }

    const callback = (parameter) => navigate(parameter);
    
    if(errorForm) return;

    dispatch(actions.loginRequest({ email, password, prevPath, callback }));
  }

  return (
    <>
    <Container>
      <Loading isLoading={isLoading} />
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Senha"/>
          <button type="submit">Entrar</button>
      </Form>
    </Container>
    </>
  )
}