import { Routes, Route, BrowserRouter } from "react-router-dom";
import React, { useEffect, useState } from "react";

// import "./App.css";
// import api from "./services/api.js";

import Clientes from "./components/views/Clientes";
import Produtos from "./components/views/Produtos";
import Header from "./components/Header/Header";

const App = () => {
  // const [produtos, setProdutos] = useState([]);
  // const [funcionarios, setFuncionarios] = useState([]);

  // async function getProdutos() {
  //   await api.get("/produtos").then((response) => {
  //     setProdutos(response.data);
  //   });
  // }

  // async function getFuncionarios() {
  //   await api.get("/funcionarios").then((response) => {
  //     setFuncionarios(response.data);
  //   });
  // }

  // useEffect(() => {
  //   getProdutos();
  //   getFuncionarios();
  // }, [getFuncionarios, getProdutos]);

  return (
    <div>
      <BrowserRouter>
        <Route path="/clientes" component={Clientes} />
        <Route path="/produtos" component={Produtos} />
      </BrowserRouter>

      <Header />
    </div>
  );
}

export default App;
