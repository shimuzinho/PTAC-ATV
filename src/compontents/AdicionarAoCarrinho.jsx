import { useState } from 'react'

export default function AdicionarAoCarrinho ({setCarrinho, carrinhoAtual, produto}) {
    const adicionar = (prod) => {
        if (!carrinhoAtual.includes(prod)) {
            const novoCarrinho = [...carrinhoAtual, prod]
            setCarrinho(novoCarrinho)
        }
    }

    return (
        <button onClick={() => {
            adicionar(produto)
        }}>Adicionar ao Carrinho</button>
    )
}