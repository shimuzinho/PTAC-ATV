import style from '../styles/style.module.css'

export default function AdicionarAoCarrinho({ setCarrinho, carrinhoAtual, produto }) {
    const adicionar = (prod) => {
        if (!carrinhoAtual.includes(prod)) {
            const novoCarrinho = [...carrinhoAtual, prod]
            setCarrinho(novoCarrinho)
        }
    }

    return (
        <button className={style.botaoAdicionar} onClick={() => {
            adicionar(produto)
        }}>Adicionar ao Carrinho</button>
    )
}
