import { useEffect, useState } from 'react'
import ListarProdutos from '../compontents/ListarProdutos'

export default function Home() {
    const [produtos, setProdutos] = useState([])

    useEffect(() => {
        const receberLista = async () => {
            try {
                const lista = await fetch('https://fakestoreapi.com/products')
                const dados = await lista.json()
                setProdutos(dados)
            } catch (err) {
                console.alert('Ocorreu um erro na conexão com a API')
            }
        }
        receberLista()
    }, [])
    
    return (
        <>
            <h1>Produtos:</h1>
            <ListarProdutos lista={produtos}></ListarProdutos>
        </>
    )
}