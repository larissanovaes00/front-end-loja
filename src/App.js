import { Route, BrowserRouter } from "react-router-dom";
import React from "react";

import Clientes from "./components/views/Clientes/Clientes";
import Produtos from "./components/views/Produtos/Produtos";
import Header from "./components/Header/Header";

const App = () => {

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
