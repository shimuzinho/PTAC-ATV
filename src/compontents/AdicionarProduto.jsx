import style from '../styles/style.module.css'
import { useRef } from 'react';

export default function AdicionarProduto ( {setProdutos, produtos} ) {
  const idRef = useRef(30)  

  const adicionar = (event) => {
    event.preventDefault()

    const nome = event.target.nome.value
    const imagem = event.target.imagem.value
    const valor = parseFloat(event.target.preco.value)

    const novoProduto = {
      id: ++idRef.current,
      "title": nome,
      "images": [
        imagem
      ],
      "price": valor
    }

    setProdutos([novoProduto, ...produtos])
  }

  return(
    <>
      <form onSubmit={adicionar} className={style.form}>
        <label htmlFor="nome" className={style.label}>Nome do produto: </label>
        <input name="nome" className={style.input} required />
        
        <label htmlFor="imagem" className={style.label}>Imagem do produto: </label>
        <input name="imagem" className={style.input} required />
        
        <label htmlFor="preco" className={style.label}>Preço do produto: </label>
        <input name="preco" type="number" step="0.01" className={style.input} required />
        
        <button type="submit" className={style.button}>Adicionar Produto</button>
      </form>
    </>
  )
}