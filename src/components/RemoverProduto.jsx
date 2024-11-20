import style from '../styles/style.module.css'

export default function RemoverProduto ({ produtos, setProdutos, carrinho, setCarrinho, prod }) {
  const removerProdutoArray = (prod) => {
    const novosProdutos = produtos.filter(el => el.id != prod.id);
    setProdutos(novosProdutos);
  };

  const removerProdutoCarrinho = (prod) => {
    if (carrinho.includes(prod)) {
      const novoCarrinho = carrinho.filter(el => el.id != prod.id);
      setCarrinho(novoCarrinho);
    };
  };

  return (
    <button className={style.botaoRemover} onClick={() => {
      removerProdutoArray(prod)
      removerProdutoCarrinho(prod)
    }}>Remover Produto</button>
  );
};