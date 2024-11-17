import style from '../styles/style.module.css'

export default function RemoverProduto ({ setCarrinho, carrinhoAtual, produto, setProdutos, produtos }) {
  const removerProdutoArray = (prod) => {
    const novosProdutos = produtos.filter(el => el.id != prod.id)
    setProdutos(novosProdutos)
  }

  console.log(carrinhoAtual)

  const removerProdutoCarrinho = (prod) => {
    if (carrinhoAtual.includes(prod)) {
      const novoCarrinho = carrinhoAtual.filter(el => el.id != prod.id)
      setCarrinho(novoCarrinho)
    }
  }

  return (
    <button className={style.botaoRemover} onClick={() => {
      removerProdutoArray(produto)
      removerProdutoCarrinho(produto)
    }}>Remover Produto</button>
  )
}