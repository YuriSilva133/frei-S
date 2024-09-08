import './index.scss'
import { Link } from 'react-router-dom'

export default function InfoEx(props) {
    return (
        <div className='descricao-comp'>
            <div className='titulo'>
                <div className='texto'>
                    <Link to='/'><img src='/voltar.png' alt='voltar' /></Link>
                    <h2>{props.titulo}</h2>
                </div>
                <div className='faixa' style={{ background: props.corFaixa }} />
            </div>

            <div className='descricao'>
                <p>{props.descricao}</p>
            </div>
        </div>
    )
}