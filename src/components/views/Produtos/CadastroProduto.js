import { useState } from "react";
import api from "../../../services/api";

const CadastroProduto = () => {
    const [codigo, setCodigo] = useState([]);
    const [nome, setNome] = useState([]);
    const [descricao, setDescricao] = useState([]);
    const [preco, setPreco] = useState([]);

    const saveProduto = () => {
        const produto = {
            codigo,
            nome,
            descricao,
            Number(preco)
        }

        await api({
            method: 'post',
            url: '/produtos',
            data: produto
        }).then((response) => {
            console.log(response)
        });
    }

    return (
        <div className="cadastro-produto">
            <h1>Novo Produto</h1>
            <form>
                <input type="text" value={codigo} placeholder="Insira o código"
                    onChange={(event) => setCodigo(event.target.value)}/>
                <input type="text" value={nome} placeholder="Insira o nome"
                    onChange={(event) => setNome(event.target.value)}/>
                <input type="text" value={descricao} placeholder="Insira a descrição"
                    onChange={(event) => setDescricao(event.target.value)}/>
                <input type="text" value={preco} placeholder="Insira o preco"
                    onChange={(event) => setPreco(event.target.value)}/>
                <button onClick={saveProduto} type="button">Salvar</button>
            </form>
        </div>
    )
}

export default CadastroProduto