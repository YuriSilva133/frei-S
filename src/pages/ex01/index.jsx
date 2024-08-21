import { Link } from 'react-router-dom'
import './index.scss'
import { useState } from 'react'
import Cabecalho from '../components/cabecalho';

export default function Ex01() {
    const [valorPedido, setValorPedido] = useState(0);
    const [valorCupom, setValorCupom] = useState(0);
    const [valorTotal, setValorTotal] = useState(0);

    function calcularValorTotal() {
        let total = valorPedido - valorCupom;
        setValorTotal(total);
    }

    return (
        <div className='pagina-e01'>
            <Cabecalho />

            <div className='exercicio'>
                <div className='titulo'>
                    <div className='texto'>
                        <Link to='/'><img src='/voltar.png' alt='voltar' /></Link>
                        <h2>Exercício 01 - Cupom de desconto</h2>
                    </div>
                    <div className='faixa' />
                </div>

                <div className='descricao'>
                    <p>Implementar um programa em <b>Javascript</b> para calcular o valor final de uma compra a partir do valor da compra e do cupom de desconto. <b>O cupom diz quantos reais</b> terá de desconto.</p>
                </div>
                
                <div className='formulario'>
                    <div className='campos'>
                        <div className='campo'>
                            <label>Informe o valor do pedido</label>
                            <input placeholder='0' onChange={e => setValorPedido(e.target.value)} />
                        </div>
                        <div className='campo'>
                            <label>Informe o valor do cupom</label>
                            <input placeholder='0' onChange={e => setValorCupom(e.target.value)} />
                        </div>
                        <button href='#' className='executar' onClick={calcularValorTotal}>Executar</button>
                    </div>
                    <h3 className='resultado'>Resultado: O total é R$ {valorTotal.toFixed(2)}</h3>
                </div>

            </div>
        </div>
    )
}
