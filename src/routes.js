import { Route, Routes } from "react-router-dom";

import Clientes from "./components/views/Clientes/Clientes";
import Produtos from "./components/views/Produtos/Produtos";

const Rotas = () => {
  return (
    <>
      <Routes>
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/produtos" element={<Produtos />} />
      </Routes>
    </>
  );
};

export default Rotas;
