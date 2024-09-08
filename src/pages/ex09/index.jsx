import Cabecalho from '../components/cabecalho'
import InfoEx from '../components/infoEx'
import './index.scss'
import { useState } from 'react'


export default function Ex09() {
    const [gramas, setGramas] = useState(0)
    const [resultado, setResultado] = useState(0)

    function CalcularTotal() {
        let precoGrama = 3.50
        let valorTotal = 0

        if (gramas >= 1000) {
            precoGrama = 3.00

            valorTotal = gramas / precoGrama
        }else{
            valorTotal = gramas / precoGrama
        }
        setResultado(valorTotal.toFixed(2))
    }

    return (
        <div className='pagina-ex09'>
            <Cabecalho />

            <div className='exercicio'>
                <InfoEx
                    titulo="Exercício 09 - Sorveteria"
                    corFaixa="#D0D0D0"
                    descricao="Implementar um programa em javascript que calcule o total a se pagar em uma compra na sorveteria, a partir do total de gramas comprado. O preço de 100g é R$ 3,50 mas se o total de gramas for a partir de 1kg, o preço das 100g diminui 50 centavos."
                />

                <div className='formulario'>

                    <div className='campos'>
                        <div className='entradas'>
                            <div className='campo'>
                                <label>Total de gramas</label>
                                <input type="text" value={gramas} onChange={(e) => setGramas(Number(e.target.value))}/>
                            </div>
                        </div>

                        <button className='executar' onClick={CalcularTotal}>Executar</button>

                    </div>

                    <div className='resultado'>
                        <p>O total a pagar é R${Number(resultado)}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}