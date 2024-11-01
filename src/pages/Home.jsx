import { useEffect, useState } from 'react'
import ListarProdutos from '../compontents/ListarProdutos'
import style from '../styles/style.module.css'
import AdicionarProduto from '../compontents/AdicionarProduto'

export default function Home() {
    const [produtos, setProdutos] = useState([])
    const [produtosCarrinho, setProdutosCarrinho] = useState([])

    useEffect(() => {
        const receberLista = async () => {
            try {
                const lista = await fetch('https://dummyjson.com/products')
                const dados = await lista.json()
                setProdutos(dados.products)
            } catch (err) {
                console.alert('Ocorreu um erro na conexão com a API')
            }
        }
        receberLista()
    }, [])

    return (
        <>
            <AdicionarProduto setProdutos={setProdutos} produtos={produtos}/>
            <div className={style.container}>
                <div className={style.produtos}>
                    <h1 className={style.titulo}>Produtos:</h1>
                    <ListarProdutos lista={produtos} button={true} setCarrinho={setProdutosCarrinho} listaCarrinho={produtosCarrinho} setProdutos={setProdutos} produtos={produtos}/>
                </div>
                <div className={style.carrinho}>
                    <h1 className={style.titulo}>Produtos no Carrinho:</h1>
                    <ListarProdutos lista={produtosCarrinho} button={false} setCarrinho={setProdutosCarrinho} listaCarrinho={produtosCarrinho}/>
                </div>
            </div>
        </>
    )
}