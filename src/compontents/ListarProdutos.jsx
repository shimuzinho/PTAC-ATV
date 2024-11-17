import style from '../styles/style.module.css'
import AdicionarAoCarrinho from './AdicionarAoCarrinho'
import RemoverDoCarrinho from './RemoverDoCarrinho'
import RemoverProduto from './RemoverProduto'
import Loading from './Loading'

export default function ListarProdutos({ lista, button, setCarrinho, listaCarrinho, setProdutos, produtos, loading, tipo }) {
    if (loading) {
        if (lista.length == 0) {
            return (
                <Loading/>
            )
        }
    }

    console.log(listaCarrinho);
    return (
        <main className={style.containerProdutos}>
            {lista.map(el => (
                <div key={el.id} className={style.containerIndividualProduto}>
                    <img src={el.images[0]} alt={el.title} className={style.imagem} />
                    <p className={style.textoTitulo}>{el.title}</p>
                    <p className={style.preco}>R$ {el.price}</p>
                    {button ? (
                        <AdicionarAoCarrinho setCarrinho={setCarrinho} carrinhoAtual={listaCarrinho} produto={el}/>
                    ) : (<RemoverDoCarrinho setCarrinho={setCarrinho} carrinhoAtual={listaCarrinho} produto={el}/>)}
                    {el.id > 30 && tipo != 'carrinho' && (
                        <RemoverProduto setCarrinho={setCarrinho} carrinhoAtual={listaCarrinho} produto={el} setProdutos={setProdutos} produtos={produtos}/>
                    )}
                </div>
            ))}
        </main>
    )
}
