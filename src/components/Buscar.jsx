import style from '../styles/style.module.css';
import { useState, useEffect } from 'react';

export default function Buscar({ produtosAux, setProdutosAux, produtos }) {
    const [nomeBusca, setNomeBusca] = useState('');

    const ordemAlfabeticaAZ = () => {
        setProdutosAux([...produtosAux].sort((a, b) => a.title.localeCompare(b.title)));
    };

    const ordemAlfabeticaZA = () => {
        setProdutosAux([...produtosAux].sort((a, b) => b.title.localeCompare(a.title)));
    };

    const precoMenorParaMaior = () => {
        setProdutosAux([...produtosAux].sort((a, b) => a.price - b.price)); 
    };

    const precoMaiorParaMenor = () => {
        setProdutosAux([...produtosAux].sort((a, b) => b.preco - a.preco));
    };

    useEffect(() => {
        const buscarProdutos = () => {
            if (nomeBusca.length > 0) {
                const nomeBuscarFormatado = nomeBusca.toLowerCase();
                const produtosBuscados = produtos.filter(el => el.title.toLowerCase().includes(nomeBuscarFormatado));
                setProdutosAux(produtosBuscados);
            } else {
                setProdutosAux(produtos);
            }
        };
        buscarProdutos();
    }, [nomeBusca])

    return (
        <div>
            <button className={style.botaoBuscar} style={{marginLeft: '1.3%'}} onClick={() => ordemAlfabeticaAZ()}>AZ</button>
            <button className={style.botaoBuscar} onClick={() => ordemAlfabeticaZA()}>ZA</button>
            <button className={style.botaoBuscar} onClick={() => precoMenorParaMaior()}>Preço (Menor para Maior)</button>
            <button className={style.botaoBuscar} onClick={() => precoMaiorParaMenor()}>Preço (Maior para Menor)</button>
            <input
            className={style.inputBuscar}
                placeholder='Buscar produto'
                value={nomeBusca}
                onChange ={(event) => setNomeBusca(event.target.value)}
            />
        </div>
    );
};