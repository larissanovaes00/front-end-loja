import { useState } from "react";
import api from "../../../services/api";

const CadastroCliente = () => {
    const [nome, setNome] = useState([]);
    const [endereco, setEndereco] = useState([]);
    const [telefone, setTelefone] = useState([]);
    const [email, setEmail] = useState([]);

    const saveCliente = () => {
        const cliente = {
            nome,
            endereco,
            telefone,
            email
        }

        await api({
            method: 'post',
            url: '/clientes',
            data: cliente
        }).then((response) => {
            console.log(response)
        });
    }

    return (
        <div className="cadastro-cliente">
            <h1>Novo Cliente</h1>
            <form>
                <input type="text" value={nome} placeholder="Insira o nome"
                    onChange={(event) => setNome(event.target.value)}/>
                <input type="text" value={endereco} placeholder="Insira o endereço"
                    onChange={(event) => setEndereco(event.target.value)}/>
                <input type="text" value={telefone} placeholder="Insira a telefone"
                    onChange={(event) => setTelefone(event.target.value)}/>
                <input type="text" value={email} placeholder="Insira o email"
                    onChange={(event) => setEmail(event.target.value)}/>
                <button onClick={saveCliente} type="button">Salvar</button>
            </form>
        </div>
    )
}

export default CadastroCliente