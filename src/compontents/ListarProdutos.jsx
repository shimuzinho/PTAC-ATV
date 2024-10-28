import style from '../styles/listaProdutos.module.css'

export default function ListarProdutos({ lista }) {
    return (
        <main className={style.containerProdutos}>
            {
                lista.map(el => (
                    <div key={el.id} className={style.containerIndividualProduto}>
                        <img src={el.image} alt={el.title} className={style.imagem}></img>
                        <p className={style.textoTitulo}>{el.title}</p>
                        <p>R$ {el.price}</p>
                        <button onClick={}>Adicionar ao Carrinho</button>
                    </div>
                ))
            }
        </main>
            )
}