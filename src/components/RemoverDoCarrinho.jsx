
import style from '../styles/style.module.css';

export default function RemoverDoCarrinho ({ carrinho, setCarrinho, prod }) {
    const removerItem = (prod) => {
        const novoCarrinho = carrinho.filter(el => el.id != prod.id);
        setCarrinho(novoCarrinho);
    };

    return (
        <button className={style.botaoRemover} onClick={() => {2
            removerItem(prod);
        }}>Remover do Carrinho</button>
    );
};