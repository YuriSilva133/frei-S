import './index.scss'
import Cabecalho from '../components/cabecalho'
import InfoEx from '../components/infoEx'

import { useState } from 'react'

export default function Ex11() {

    const [historico, setHistorico] = useState([])
    const [editando, setEditando] = useState(-1)

    const [peso, setPeso] = useState(0)
    const [altura, setAltura] = useState(0)

    function calcularSituacao() {
        let situacaoLocal = ''

        let imc = peso / (altura * altura)

        if (imc <= 18.5) {
            situacaoLocal = 'Abaixo do peso' 
        }
        else if (imc <= 25) {
            situacaoLocal = 'Peso normal'
        }
        else if (imc <= 30) {
            situacaoLocal = 'Sobrepeso'
        }
        else {
            situacaoLocal = 'Obesidade'
        }

        let res = {
            peso: peso,
            altura: altura,
            situacao: situacaoLocal
        }

        if (editando === -1) {
            //alert('adicionado')
            setHistorico([...historico, res])

            //limpar inputs
            setPeso('')
            setAltura('')
        }
        else {
            //alert('editando')
            historico[editando].peso = peso;
            historico[editando].altura = altura;
            setHistorico([...historico])

            //limpar inputs
            setPeso('')
            setAltura('')

            //modo de adicionar
            setEditando(-1)
        }  

    }
    
    function removerItem(pos) {
        historico.splice(pos, 1)
        setHistorico([...historico])
    }

    function alterarItem(pos) {
        setPeso(historico[pos].peso)
        setAltura(historico[pos].altura)
      
        setEditando(pos)
    }


    return (
        <div className='pagina-ex10'>
            <Cabecalho />

            <div className='exercicio'>
                
                <InfoEx
                    titulo="Exercício 10 - Calculo de IMC com histórico"
                    corFaixa="purple"
                    descricao="Implemente um programa em Javascript que a partir da altura e do peso de uma pessoa, calcule o IMC e avalie a faixa correspondente a tabela ao lado. Ao final, apresente o IMC e a situação"
                />

                <div className='formulario'>
                    <div className='campos'>

                        <div className='entradas'>
                            <div className='campo'>
                                <label>Altura</label>
                                <input type="text" value={altura} onChange={(e) => setAltura(e.target.value)} />
                            </div>

                            <div className='campo'>
                                <label>Peso</label>
                                <input type="text" value={peso} onChange={(e) => setPeso(e.target.value)} />
                            </div>
                        </div>

                        <button className='executar' onClick={calcularSituacao}> Executar</button>
                    </div>

                    <div className='resultado'>
                        <div className='item'>
                            <p>Altura: {altura} | Peso: {peso} | Situação: {peso}</p>
                        </div>

                        {
                            historico.map((linha, pos) => (
                                <div className='item'>
                                    <p key={pos}>
                                        Altura: {linha.altura} | Peso: {linha.peso} | Situação: {linha.situacao}
                                    </p>
                                    <i class="fa-solid fa-pen-to-square" onClick={() => alterarItem(pos)}></i> &nbsp;
                                    <i class="fa-solid fa-xmark" onClick={() => removerItem(pos)} ></i> &nbsp;
                                </div>
                            )
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}