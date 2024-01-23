// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { get } from "lodash";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";


import * as actions from "../../store/modules/auth/actions";
import Loading from "../../components/Loading";
import axios from "../../services/axios";
import { Container } from "../../styles/GlobalStyles"
import {Title, Form} from "./styled";

// eslint-disable-next-line react/display-name
export default () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const [foto, setFoto] = useState('');
    useEffect(() => {
      setIsLoading(true);
      if(!id) return;

      const getData = async () => {
        try{
          setIsLoading(true);
          const { data } = await axios.get(`/alunos/${id}`)
          const Foto = data.Fotos[0]?.url || "";
          setFoto(Foto);
          setIsLoading(false);
        } catch(error) {
          toast.error('Erro ao obter imagem');
          setIsLoading(false);
          navigate("/");
        }
      }
      getData();
    }, [id, dispatch, navigate])
  


  const handleChange = async (e) => {
    const foto = e.target.files[0];
    const fotoURL = URL.createObjectURL(foto);
    
    setFoto(fotoURL);

    //axios por padrão não permite enviar form em formato json, então simulamos um form ao enviar pro bd
    const formData = new FormData();

    //cria duas chaves no front que ja existe la no backend
    formData.append('aluno_id', id);
    formData.append('foto', foto); 
    try {
      setIsLoading(true);
      //manda cabeçalho que contém headers de que tipo de arquivo está sendo enviado, "multipart/form-data" para indicar que o conteúdo é formatado como uma série de partes
      await axios.post("/fotos/", formData, {
        header: {
          "Content-Type": "multipart/form-data",
        }
      })
      toast.success("Foto Enviado com sucesso!");
      setIsLoading(false);
    } catch(error) {
      setIsLoading(false);
      const { status } = get(error, "response.status", "");
      toast.error('Erro ao obter imagem');

      if(status === 401) {
        dispatch(actions.loginFailure());
        navigate("/login");
        toast.error("Faça login novamente");
      } else {
        toast.error("Erro desconhecido");
      }
    }
  }
  return (
    <>
      <Container>
        <Loading isLoading={isLoading} />
        <Title>Fotos</Title>
        <Form>
          <label htmlFor="foto">
            {foto ? <img src={foto} alt="Foto" /> : "Selecionar"}
            <input type="file"  id="foto" onChange={handleChange}/>
          </label>
        </Form>
      </Container>
    </>
  )
}