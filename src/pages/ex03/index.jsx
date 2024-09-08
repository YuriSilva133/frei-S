import Cabecalho from '../components/cabecalho'
import InfoEx from '../components/infoEx'
import './index.scss'

import { useState } from 'react'

export default function Ex03() {
    const [qtdPequeno, setQtdPequeno] = useState(0)
    const [qtdMedio, setQtdMedio] = useState(0)
    const [qtdGrande, setQtdGrande] = useState(0)
    const [resultado, setResultado] = useState('')

    function calcularPedido() {
        let peq = 13.50 * qtdPequeno
        let med = 15.00 * qtdMedio
        let gra = 17.50 * qtdGrande

        let res = peq + med + gra
        setResultado(res)
    }

    return (
        <div className='pagina-ex03'>
            <Cabecalho />

            <div className='exercicio'>
                <InfoEx
                    titulo="Exercício 03 - Valor total por quantidade"
                    corFaixa="#37FFF3"
                    descricao="Implementar um programa em Javascript para calcular o total de uma venda de açaí a partir das quantidades compradas para cada tamanho: pequeno, médio e grande, sabendo que o valor do açaí é R$ 13,50; R$ 15,00 e R$ 17,50 respectivamente"
                />

                <div className='formulario'>

                    <div className='campos'>
                        <div className='entradas'>
                            <div className='campo'>
                                <label>Quantidade pequeno</label>
                                <input type="text" value={qtdPequeno} onChange={e => setQtdPequeno(e.target.value)} />
                            </div>

                            <div className='campo'>
                                <label>Quantidade pequeno</label>
                                <input type="text" value={qtdMedio} onChange={e => setQtdMedio(e.target.value)} />

                            </div>

                            <div className='campo'>
                                <label>Quantidade pequeno</label>
                                <input type="text" value={qtdGrande} onChange={e => setQtdGrande(e.target.value)} />
                            </div>
                        </div>

                        <button className='executar' onClick={calcularPedido}> Executar </button>

                    </div>
                    
                    <div className='resultado'>
                        <p> Resultado: O total é R${Number(resultado).toFixed(2)}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}