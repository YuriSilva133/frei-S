import Cabecalho from '../components/cabecalho'
import InfoEx from '../components/infoEx'
import './index.scss'
import { useState } from 'react'

export default function Ex08() {

    const [temperatura, setTemperatura] = useState(0)
    const [situacao, setSituacao] = useState(0)
    const [corTemp, setCorTemp] = useState('#FFF')

    function verificarTemperatura() {
        let res = ''

        if (temperatura >= 41) {
            res = 'Hipertemia'
        }
        else if (temperatura >= 39.6 && temperatura < 41) {
            res = 'Febre Alta'
        }
        else if (temperatura >= 37.6 && temperatura < 39.6) {
            res = 'Febre'
        }
        else if (temperatura >= 36 && temperatura < 37.6) {
            res = 'Normal'
        }
        else if (temperatura < 36) {
            res = 'Hipotermia'
        }

        if (temperatura >= 36) {
            setCorTemp('#f9d7cd')
        }else{
            setCorTemp('#FFF')
        }

        setSituacao(res)
    }

    return (
        <div className="pagina-ex08">
            <Cabecalho />

            <div className='exercicio'>
                <InfoEx
                    titulo="Exercicio 08 - Temperatura"
                    corFaixa="#151515"
                    descricao="Implementar um programa em javascript que a partir da temperatura, avalie a situação da pessoa conforme a tabela. Ao final, apresente a classificação"
                />

                <div className='tabela-temp'>
                    <table>
                        <tr>
                            <th>Média</th>
                            <th>Situação</th>
                        </tr>
                        <tr>
                            <td>Maior ou igual a 41</td>
                            <td>Hipertemia</td>
                        </tr>
                        <tr>
                            <td>Maior ou igual a 39,6 e menor que 41</td>
                            <td>Febre Alta</td>
                        </tr>
                        <tr>
                            <td>Maior ou igual a 37,6 e menor que 39,6</td>
                            <td>Febre</td>
                        </tr>
                        <tr>
                            <td>Maior ou igual a 36 e menor que 37,6</td>
                            <td>Normal</td>
                        </tr>
                        <tr>
                            <td>Abaixo de 36</td>
                            <td>Hipotermia</td>
                        </tr>
                    </table>
                </div>


                <div className='formulario'>
                    <div className="campos" style={{background:corTemp}}>
                        <div className="entradas">
                            <div className='campo'>
                                <label>Temperatura</label>
                                <input type="text" value={temperatura} onChange={(e) => setTemperatura(Number(e.target.value))} />
                            </div>
                        </div>

                        <button className='executar' onClick={verificarTemperatura}> Executar </button>

                    </div>

                    <div className='resultado'>
                        <p>A situação para a sua temperatura é {situacao}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}