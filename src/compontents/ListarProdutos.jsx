import style from '../styles/style.module.css'
import AdicionarAoCarrinho from './AdicionarAoCarrinho'
import RemoverDoCarrinho from './RemoverDoCarrinho'
<<<<<<< HEAD
import RemoverProduto from './RemoverProduto'
=======
>>>>>>> bc18b589ff22792ee25297d9afa77071bd0d9e49

export default function ListarProdutos({ lista, button, setCarrinho, listaCarrinho, setProdutos, produtos }) {
    return (
        <main className={style.containerProdutos}>
            {lista.map(el => (
                <div key={el.id} className={style.containerIndividualProduto}>
<<<<<<< HEAD
                    <img src={el.images[0]} alt={el.title} className={style.imagem} />
                    <p className={style.textoTitulo}>{el.title}</p>
                    <p className={style.preco}>R$ {el.price}</p>
                    {button ? (
                        <AdicionarAoCarrinho setCarrinho={setCarrinho} carrinhoAtual={listaCarrinho} produto={el}/>
                    ) : (<RemoverDoCarrinho setCarrinho={setCarrinho} carrinhoAtual={listaCarrinho} produto={el}/>)}
                    {el.id > 30 && (
                        <RemoverProduto setCarrinho={setCarrinho} carrinhoAtual={listaCarrinho} produto={el} setProdutos={setProdutos} produtos={produtos}/>
                    )}
=======
                    <img src={el.image} alt={el.title} className={style.imagem} />
                    <p className={style.textoTitulo}>{el.title}</p>
                    <p className={style.preco}>R$ {el.price}</p>
                    {button ? ( 
                        <AdicionarAoCarrinho setCarrinho={setCarrinho} carrinhoAtual={listaCarrinho} produto={el}/>
                    ) : (<RemoverDoCarrinho setCarrinho={setCarrinho} carrinhoAtual={listaCarrinho} produto={el}/>)}
>>>>>>> bc18b589ff22792ee25297d9afa77071bd0d9e49
                </div>
            ))}
        </main>
    )
<<<<<<< HEAD
}
=======
}
>>>>>>> bc18b589ff22792ee25297d9afa77071bd0d9e49
