import style from '../styles/listaProdutos.module.css'
import AdicionarAoCarrinho from '../compontents/AdicionarAoCarrinho'

export default function ListarProdutos({ lista, button, setCarrinho, listaCarrinho }) {
    return (
        <main className={style.containerProdutos}>
            {
                lista.map(el => (
                    <div key={el.id} className={style.containerIndividualProduto}>
                        <img src={el.image} alt={el.title} className={style.imagem}></img>
                        <p className={style.textoTitulo}>{el.title}</p>
                        <p>R$ {el.price}</p>
                        {button && <AdicionarAoCarrinho setCarrinho={setCarrinho} carrinhoAtual={listaCarrinho} produto={el}></AdicionarAoCarrinho>}
                    </div>
                ))
            }
        </main>
            )
}