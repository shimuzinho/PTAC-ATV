import style from '../styles/style.module.css'
import AdicionarAoCarrinho from './AdicionarAoCarrinho'
import RemoverDoCarrinho from './RemoverDoCarrinho'
import RemoverProduto from './RemoverProduto'
import Loading from './Loading'

export default function ListarProdutos({ produtosMostrados, produtosAux, carrinho, setCarrinho, produtos, setProdutos, loading = false, tipo, buttonAdicionarCarrinho = false }) {
    if (loading) {
        if (produtos.length == 0) {
            console.log(produtosMostrados)
            return (
                <Loading/>
            )
        }
    }

    return (
        <main className={style.containerProdutos}>
            {produtosMostrados.map(el => (
                <div key={el.id} className={style.containerIndividualProduto}>
                    <img src={el.images[0]} alt={el.title} className={style.imagem} />
                    <p className={style.textoTitulo}>{el.title}</p>
                    <p className={style.preco}>R$ {el.price}</p>
                    {buttonAdicionarCarrinho ? (
                        <AdicionarAoCarrinho carrinho={carrinho} setCarrinho={setCarrinho} prod={el} />
                    ) : (<RemoverDoCarrinho carrinho={carrinho} setCarrinho={setCarrinho} prod={el} />)}
                    {el.id > 30 && tipo != 'carrinho' && (
                        <RemoverProduto produtos={produtos} setProdutos={setProdutos} prod={el}/>
                    )}
                </div>
            ))}
        </main>
    )
}
