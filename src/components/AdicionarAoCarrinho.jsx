import style from '../styles/style.module.css'

export default function AdicionarAoCarrinho({ carrinho, setCarrinho, prod }) {
    const adicionar = (prod) => {
        if (!carrinho.includes(prod)) {
            const novoCarrinho = [...carrinho, prod]
            setCarrinho(novoCarrinho)
        }
    }

    return (
        <button className={style.botaoAdicionar} onClick={() => {
            adicionar(prod)
        }}>Adicionar ao Carrinho</button>
    )
}
