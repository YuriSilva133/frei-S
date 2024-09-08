import Cabecalho from '../components/cabecalho'
import InfoEx from '../components/infoEx'
import './index.scss'

import { useState } from 'react'

export default function Ex06() {
    
    const [total, setTotal] = useState(0)
    const [salario, setSalario] = useState(0)
    const [porcentagem, setPorcentagem] = useState(0)
    const [desconto, setDesconto] = useState(0)

    function CalcularSalario() {
        //(1000 * (10 / 100)) - 300

        setTotal(salario + (salario * porcentagem / 100) - desconto);
    }

    return (
        <div className='pagina-ex06'>
            <Cabecalho />

            <div className='exercicio'>
                <InfoEx
                    titulo="Exercício 06 - Salário líquido"
                    corFaixa="#FF5B37"
                    descricao="Implemente um programa em javascript para calcular o salário líquido de um funcionário, a partir de seu salário base, do bônus mensal em porcentagem e do total de descontos em reais"
                />

                <div className='formulario'>

                    <div className='campos'>
                        <div className='entradas'>

                            <div className='campo'>
                                <label>Salario </label>
                                <input type="text" value={salario} onChange={(e) => setSalario(Number(e.target.value))}/>
                            </div>

                            <div className='campo'>
                                <label>Bonus mensal em porcentagem</label>
                                <input type="text" value={porcentagem} onChange={(e) => setPorcentagem(Number(e.target.value))}/>
                            </div>

                            <div className='campo'>
                                <label>Total de desconto</label>
                                <input type="text" value={desconto} onChange={(e) => setDesconto(Number(e.target.value))}/>
                            </div>
                        </div>

                        <button className='executar' onClick={CalcularSalario}> Executar </button>

                    </div>

                    <div className='resultado'>
                        <p> Resultado: O total é R${Number(total).toFixed(2)}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}