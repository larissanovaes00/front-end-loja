
import api from "../../services/api.js";
import React, { useEffect, useState } from "react";

function Clientes() {
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
    <div className="Clientes">
      <div>
        <h1>Clientes</h1>
        {clientes.map((cliente) => {
          return <p key={cliente.id_cliente}>{cliente.nome}</p>;
        })}
      </div>
    </div>
  );
}

export default Clientes;
