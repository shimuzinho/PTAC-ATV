import { useForm } from 'react-hook-form';
import style from '../styles/style.module.css';

export default function AdicionarProduto({ setProdutos, produtos }) {
  const { register, handleSubmit } = useForm();

  const adicionar = (novoProduto) => {
    novoProduto.id = Date.now()
    novoProduto.images = [
      novoProduto.images
    ];
    setProdutos([novoProduto, ...produtos]);
  };

  return (
    <>
      <form onSubmit={handleSubmit(adicionar)} className={style.form}>
        <label htmlFor="nome" className={style.label}>Nome do produto: </label>
        <input name="nome" className={style.input} required {...register('title')}/>

        <label htmlFor="imagem" className={style.label}>Imagem do produto: </label>
        <input name="imagem" className={style.input} required {...register('images')}/>

        <label htmlFor="preco" className={style.label}>Preço do produto: </label>
        <input name="preco" type="number" step="0.01" className={style.input} required {...register('price')}/>

        <button type="submit" className={style.button}>Adicionar Produto</button>
      </form>
    </>
  );
};