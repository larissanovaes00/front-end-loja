import React from 'react'
import { BrowserRouter, Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="Header">
      <BrowserRouter>
      <Link to="/clientes">Clientes</Link>
      <Link to="/produtos">Produtos</Link>
      </BrowserRouter>
    </div>
  )
}

export default Header;