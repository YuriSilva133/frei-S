import { useState } from 'react'
import Cabecalho from '../components/cabecalho'
import InfoEx from '../components/infoEx'
import './index.scss'

export default function Ex04() {

    const [tituloLivro, setTituloLivro] = useState('')
    const [qtdPaginas, setQtdPaginas] = useState(0)
    const [segundos, setSegundos] = useState(0)
    const [resposta, setResposta] = useState(0)

    function CalcularTempoLivro() {

        let res = (segundos * qtdPaginas)/3600

        setResposta(res);
    }


    return (
        <div className='pagina-ex04'>
            <Cabecalho />

            <div className='exercicio'>
                <InfoEx
                    titulo="Exercício 04 - Leitura de livro"
                    corFaixa="#37B7FF"
                    descricao="Implementar um programa em Javascript que calcule o tempo que um livro será lido por uma pessoa a partir do nome do livro, do total de páginas e do tempo em segundos de leitura por página"
                />

                <div className='formulario'>

                    <div className='campos'>
                        <div className='entradas'>
                            <div className='campo'>
                                <label>Nome do livro</label>
                                <input type="text" value={tituloLivro} onChange={(e) => setTituloLivro(e.target.value)} />
                            </div>

                            <div className='campo'>
                                <label>Total de Pagina</label>
                                <input type="text" value={qtdPaginas} onChange={(e) => setQtdPaginas(e.target.value)} />
                            </div>

                            <div className='campo'>
                                <label>Tempo em segundos de leitura</label>
                                <input type="text" value={segundos} onChange={(e) => setSegundos(e.target.value)} />
                            </div>
                        </div>

                        <button className='executar' onClick={CalcularTempoLivro}> Executar </button>

                    </div>

                    <div className='resultado'>
                        <p> Você lerá {tituloLivro} em {Number(resposta).toFixed(2)} horas</p>
                    </div>
                </div>
            </div>
        </div>
    )
}