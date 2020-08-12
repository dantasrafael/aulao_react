import React, { useState } from 'react'

export default (props) => {
    const [numeros, setNumeros] = useState(Array(props.qtdeNumeros).fill(0))

    function gerarNumerosNaoContigo(array) {
        const max = 60
        const min = 1
        const novoNumero = parseInt(Math.random() * (max - min)) + min
        return array.includes(novoNumero)
            ? gerarNumerosNaoContigo(array) : novoNumero
    }
    
    function gerarNumeros() {
        const novoArray = Array(props.qtdeNumeros)
            .fill(0)
            .reduce(a => [...a, gerarNumerosNaoContigo(a)], [])
            .sort((a, b) => a - b)
        setNumeros(novoArray)
    }
    return (
        <>
            <h3>Números</h3>
            <h4>{numeros.join(' ')}</h4>
            <button onClick={gerarNumeros}>Gerar Números</button>
        </>
    );
};