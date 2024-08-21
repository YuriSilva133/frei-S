import { Link } from 'react-router-dom'
import './index.scss'

export default function Inicio() {
    return (
        <div className='pagina-inicio'>
            <div className='cabecalho'>
                <div className='titulo'>
                    <img src='/logo.png' alt='logo'/>
                    <h1>
                        React FreiS
                    </h1>
                </div>
                <div className='links'>
                    <Link to='/' className='link'>Inicio</Link>
                    <Link to='/sobre' className='link'>Sobre</Link>
                </div>
            </div>
            <div className='menu'>
                <div className='titulo'>
                    <h2>Escolha um treino...</h2>
                </div>
                <div className='cards'>
                    <Link to='/ex01' className='link'>
                        <div className='card'>
                            <div className='retangulo laranja'/>
                            <h3 className='titulo'>Cupom de desconto</h3>
                            <h4 className='subtitulo'>Exercício 1</h4>
                        </div>
                    </Link>

                    <Link to='/ex10' className='link'>
                        <div className='card'>
                            <div className='retangulo marrom'/>
                            <h3 className='titulo'>Calculo de IMC com historico</h3>
                            <h4 className='subtitulo'>Exercício 10</h4>
                        </div>
                    </Link>

                    <Link to='/ex11' className='link'>
                        <div className='card'>
                            <div className='retangulo roxo'/>
                            <h3 className='titulo'>Tabuada</h3>
                            <h4 className='subtitulo'>Exercício 11</h4>
                        </div>
                    </Link>

                    

                </div>
            </div>
        </div>
    )
}