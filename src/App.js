import "./App.css";
import api from "./services/api.js";
import React, { useEffect, useState } from "react";
import { BrowserRouter} from "react-router-dom";
import Clientes from "./components/views/Clientes/Clientes";
import Routes from "./routes";

function App() {
  const [produtos, setProdutos] = useState([]);
  const [funcionarios, setFuncionarios] = useState([]);

  async function getProdutos() {
    await api.get("/produtos").then((response) => {
      setProdutos(response.data);
    });
  }

  async function getFuncionarios() {
    await api.get("/funcionarios").then((response) => {
      setFuncionarios(response.data);
    });
  }

  useEffect(() => {
    getProdutos();
    getFuncionarios();
  }, [getFuncionarios, getProdutos]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes />
      </BrowserRouter> 

      {/* <Router>
        <Link to="/clientes">Clientes</Link>
        <Link to="/produtos">Produtos</Link>
      </Router> */}

      <div>
        <h1>Produtos</h1>
        {produtos.map((produto) => {
          return <p key={produto.id_produto}>{produto.nome}</p>;
        })}
      </div>
      <div>
        <h1>Funcionarios</h1>
        {funcionarios.map((funcionario) => {
          return <p key={funcionario.id_funcionario}>{funcionario.nome}</p>;
        })}
      </div>

      <Clientes />
    </div>
  );
}

export default App;
