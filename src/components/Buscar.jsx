import style from '../styles/style.module.css';
import { useState } from 'react';

export default function Buscar({ lista, setLista }) {
    const ordemAlfabetica = () => {
        setLista([...lista].sort((a, b) => a.title.localeCompare(b.title)));
    };

    const ordemAlfabeticaAoContrario = () => {
        setLista([...lista].sort((a, b) => b.title.localeCompare(a.title)));
    };

    const valorOrdenar = () => {
        setLista([...lista].sort((a, b) => {
            if (a.price >= b.price) {
                return 1
            } else {
                return -1
            }
        }));
    };

    const valorOrdenarAoContrario = () => {
        setLista([...lista].sort((a, b) => {
            if (a.price >= b.price) {
                return -1
            } else {
                return 1
            }
        }));
    };

    return (
        <>
            <button onClick={() => ordemAlfabetica()}>AZ</button>
            <button onClick={() => ordemAlfabeticaAoContrario()}>ZA</button>
            <button onClick={() => valorOrdenar()}>Valor</button>
            <button onClick={() => valorOrdenarAoContrario()}>Valor ao contrario</button>
        </>
    );
};