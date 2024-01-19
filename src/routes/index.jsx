// import React from "react";
import { Routes, Route } from "react-router-dom";
import { toast } from "react-toastify";

import MyRoute from "./MyRoute";
import Login from "../pages/Login";
import Fotos from "../pages/Fotos";
import Aluno from "../pages/Aluno";
import Alunos from "../pages/Alunos";
import Register from "../pages/Register";
import Page404 from "../pages/Page404";


export default function RoutesPages() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Alunos />}/>
        <Route path="/aluno/:id/edit" element={<MyRoute isClosed={true}><Aluno /></MyRoute>} />
        <Route path="/aluno/" element={<MyRoute isClosed={true}><Aluno /></MyRoute>} />
        <Route path="/fotos/:id/edit" element={<MyRoute isClosed={true}><Fotos  /></MyRoute>} />
        <Route path="/register/" element={<Register />} />
        <Route path="/login" element={<Login />}/>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
}
