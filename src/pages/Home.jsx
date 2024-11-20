import { useEffect, useState } from 'react'
import ListarProdutos from '../components/ListarProdutos'
import style from '../styles/style.module.css'
import AdicionarProduto from '../components/AdicionarProduto'
import Buscar from '../components/Buscar';

export default function Home() {
    const [produtos, setProdutos] = useState([]);
    const [produtosAux, setProdutosAux] = useState([]);
    const [produtosCarrinho, setProdutosCarrinho] = useState([]);

    useEffect(() => {
        const receberLista = async () => {
            try {
                const lista = await fetch('https://dummyjson.com/products');
                const dados = await lista.json();
                setProdutos(dados.products);
                setProdutosAux(dados.products);
            } catch (err) {
                alert('Ocorreu um erro na conexão com a API');
            }
        };
        receberLista();
    }, []);

    return (
        <>
            <AdicionarProduto produtos={produtos} setProdutos={setProdutos} />
            <div>
                <Buscar produtosAux={produtosAux} setProdutosAux={setProdutosAux} produtos={produtos}/>
            </div>
            <div className={style.container}>
                <div className={style.produtos}>
                    <h1 className={style.titulo}>Produtos:</h1>
                    <ListarProdutos produtosMostrados={produtosAux} produtosAux={produtosAux} carrinho={produtosCarrinho} setCarrinho={setProdutosCarrinho} produtos={produtos} setProdutos={setProdutos} loading={true} tipo={'produtos'} buttonAdicionarCarrinho={true}/>
                </div>
                <div className={style.carrinho}>
                    <h1 className={style.titulo}>Produtos no Carrinho:</h1>
                    <ListarProdutos produtosMostrados={produtosCarrinho} produtosAux={produtosAux} carrinho={produtosCarrinho} setCarrinho={setProdutosCarrinho} tipo={'carrinho'} />
                </div>
            </div>
        </>
    )
}