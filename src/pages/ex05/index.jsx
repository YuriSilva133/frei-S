import './index.scss'
import Cabecalho from '../components/cabecalho'
import InfoEx from '../components/infoEx'
import { useState } from 'react'

export default function Ex05() {
    
    const [nota1, setNota1] = useState(0)
    const [nota2, setNota2] = useState(0)
    const [nota3, setNota3] = useState(0)
    const [media, setMedia] = useState(0)
    const [aprovacao, setAprovacao] = useState(false)

    function calcularMedia() {
        let total = nota1 + nota2 + nota3

        let res = total / 3

        let passou = false

        if (res >= 6) {
            passou = true
        }else{
            passou = false
        }
        

        setAprovacao(passou)
        setMedia(res)
    }


    return (
        <div className='pagina-ex05'>
            <Cabecalho />

            <div className='exercicio'>
                <InfoEx
                    titulo="Exercício 05 - Média de notas"
                    corFaixa="#CB37FF"
                    descricao="Implemente um programa em Javascript para verificar se um aluno passou ou não, baseado em 3 notas, considerando que a média mínima para passar é 6."
                />

                <div className='formulario'>

                    <div className='campos'>
                        <div className='entradas'>

                            <div className='campo'>
                                <label>Nota 01</label>
                                <input type="text" value={nota1} onChange={(e) => setNota1(Number(e.target.value))}/>
                            </div>

                            <div className='campo'>
                                <label>Nota 02</label>
                                <input type="text" value={nota2} onChange={(e) => setNota2(Number(e.target.value))}/>
                            </div>

                            <div className='campo'>
                                <label>Nota 03</label>
                                <input type="text" value={nota3} onChange={(e) => setNota3(Number(e.target.value))}/>
                            </div>

                        </div>

                        <button className='executar' onClick={calcularMedia}> Executar </button>

                    </div>

                    <div className='resultado'>
                        <p> Resultado: A media é {Number(media).toFixed(1)}</p>
                        <p> O aluno passou? {String(aprovacao)}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}