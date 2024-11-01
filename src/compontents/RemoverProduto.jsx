import style from '../styles/style.module.css'

export default function RemoverProduto ({setCarrinho, carrinho, produto, setProdutos, produtos}) {
  const removerProdutoArray = (prod) => {
    const novosProdutos = produtos.filter(el => el.id !== prod.id)
    setProdutos(novosProdutos)
  }

  const removerProdutoCarrinho = (prod) => {
    if (!carrinho.includes(prod)) {
      const novoCarrinho = carrinho.filter(el => el.id !== prod.id)
      setCarrinho(novoCarrinho)
    }
  }

  return (
    <button className={style.botaoRemover} onClick={() => {
      removerProdutoArray(produto)
      removerProdutoCarrinho(produto)
    }}></button>
  )
}