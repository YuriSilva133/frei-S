import { useState } from 'react'

import './index.scss'
import Cabecalho from '../components/cabecalho';
import InfoEx from '../components/infoEx';

export default function Ex11() {
    const [valor, setValor] = useState(0);
    const [tabuadas, setTabuadas] = useState([]);

    function calcularTabuada() {
        let tabuada = []

        for (let i = 0; i <= 10; i++) {
            let resultado = i * valor
            let tabuadaTexto = `${valor} x ${i} = ${resultado}`

            tabuada.push(tabuadaTexto)
        }

        setTabuadas(tabuada)
    }

    return (
        <div className='pagina-ex11'>
            <Cabecalho />

            <div className='exercicio'>

                <InfoEx
                    titulo="Exercício 11 - Tabuada"
                    corFaixa="purple"
                    descricao="Implemente um programa em Javascript que escreva a tabuada de um número informado pelo usuário. A mensagem deve estar no formato ”A x B = X”."
                />
                <div className='formulario'>
                    <div className='campos'>
                        <div className='entradas'>
                            <div className='campo'>
                                <label>Tabuada do:</label>
                                <input
                                    placeholder='0'
                                    onChange={e => setValor(e.target.value)}
                                />
                            </div>
                        </div>

                        <button className='executar' onClick={calcularTabuada}> Executar</button>
                    </div>
                    <div className='resultado'>

                        {
                            tabuadas.map(
                                linha => <p>{linha}</p>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
