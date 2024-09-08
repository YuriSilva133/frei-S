import Cabecalho from '../components/cabecalho'
import InfoEx from '../components/infoEx'
import './index.scss'
import { useState } from 'react'

export default function Ex07() {
    const [cor1, setCor1] = useState('')
    const [cor2, setCor2] = useState('')
    const [resultado, setResultado] = useState(false)

    function verificarCores() {
        //coresPrimarias: 'vermelho', 'azul', 'amarelo'

        let res = false

        if (cor1 === 'vermelho' || cor1 === 'azul' || cor1 === 'amarelo'){
            if (cor2 === 'vermelho' || cor2 === 'azul' || cor2 === 'amarelo') {
                res = true
            }
        }

        setResultado(res) 
    }


    return (
        <div className='pagina-ex07'>
            <Cabecalho />

            <div className='exercicio'>
                <InfoEx
                    titulo="Exercicio 07 - Cores Primarias"
                    corFaixa="#37FFAB"
                    descricao="Implementar um programa em javascript para verificar se duas cores são primárias"
                />

                <div className='formulario'>

                    <div className='campos'>
                        <div className='entradas'>
                            
                            <div className='campo'>
                                <label>Cor 1</label>
                                <input type="text" value={cor1} onChange={(e) => setCor1(e.target.value)} />
                            </div>

                            <div className='campo'>
                                <label>Cor 2</label>
                                <input type="text" value={cor2} onChange={(e) => setCor2(e.target.value)} />
                            </div>
                        </div>

                        <button className='executar' onClick={verificarCores}> Executar </button>

                    </div>

                    <div className='resultado'>
                        <p> As duas cores são primarias? {String(resultado)}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}