import React, { useEffect, useState } from "react";
import api from "../../services/api.js";

const Produtos = () => {
    const [produtos, setProdutos] = useState([]);
    
    async function getProdutos() {
        await api.get("/produtos").then((response) => {
            setProdutos(response.data);
        });
    }
    
    useEffect(() => {
        getProdutos();
    }, [getProdutos]);

    return (
        <div className="produtos-list">
            <div>
                <h1>Produtos</h1>
                {produtos.map((produto) => {
                return <p key={produto.id_produto}>{produto.nome}</p>;
                })}
            </div>
        </div>
    )
}

export default Produtos