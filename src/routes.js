import { Route } from "react-router-dom";
import Clientes from "./components/views/Clientes";
import Produtos from "./components/views/Produtos";

const Routes = () => {
  return (
    <>
      <Route path="/produtos" component={Produtos} />
      <Route path="/clientes" component={Clientes} />
    </>
  );
};

export default Routes;
