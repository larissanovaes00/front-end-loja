import "./App.css";
import api from "./services/api.js";
import React, { useEffect, useState } from "react";

function App() {
  const [clientes, setClientes] = useState([]);

  async function getClientes() {
    await api.get("/clientes").then((response) => {
      setClientes(response.data);
    });
  }

  useEffect(() => {
    getClientes();
  }, [getClientes]);

  return (
    <div className="App">
      {clientes.map((cliente) => {
        return <p key={cliente.id_cliente}>{cliente.nome}</p>
      })}
    </div>
  );
}

export default App;
