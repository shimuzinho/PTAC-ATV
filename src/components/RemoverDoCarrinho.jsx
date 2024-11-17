
import style from '../styles/style.module.css'

export default function RemoverDoCarrinho ({ setCarrinho, carrinhoAtual, produto }) {
    const removerItem = (prod) => {
        console.log(prod)
        const novoCarrinho = carrinhoAtual.filter(el => el.id != prod.id)
        setCarrinho(novoCarrinho)
    }

    return (
        <button className={style.botaoRemover} onClick={() => {2
            removerItem(produto)
        }}>Remover do Carrinho</button>
    )
}
