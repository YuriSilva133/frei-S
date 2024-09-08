import './index.scss'
import Cabecalho from '../components/cabecalho'
import { useState } from 'react'
import InfoEx from '../components/infoEx';

export default function Ex02() {
    const [Kg, setKg] = useState(0);
    const [respostaGrama, setRespostaGrama] = useState('');

    function Pedido() {

        let total = Kg * 1000
        setRespostaGrama(total)
    }
    /*
        let exer = [
            {
                titulo: 'Exercício 02 - Converter Kg/gramas',
                cor_linha: 'verdeClaro',
                mensagem: 'Implementar um programa em Javascript para converter kilos em gramas.',
            },
        ];
    */

    return (
        <div className="pagina-ex02">

            <Cabecalho />

            <div className='exercicio'>
                <InfoEx
                    titulo="Exercício 02 - Calculo de IMC com histórico"
                    corFaixa="#B3FF37"
                    descricao="Implemente um programa em Javascript que a partir da altura e do peso de uma pessoa, calcule o IMC e avalie a faixa correspondente a tabela ao lado. Ao final, apresente o IMC e a situação"
                />

                <div className='formulario'>

                    <div className='campos'>
                        <div className='entradas'>
                            <div className='campo'>
                                <label>Valor em kilos</label>
                                <input type="text" value={Kg} onChange={e => setKg(e.target.value)} />
                            </div>
                        </div>

                        <button className='executar' onClick={Pedido}> Executar </button>
                    </div>

                    <div className='resposta'>
                        <p> Resultado: O total é: {respostaGrama} gramas</p>
                    </div>
                </div>
            </div>
        </div>
    )
}