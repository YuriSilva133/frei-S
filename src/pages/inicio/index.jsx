import { Link } from 'react-router-dom'
import './index.scss'
import Cabecalho from '../components/cabecalho'

export default function Inicio() {
    return (
        <div className='pagina-inicio'>

            <Cabecalho />



            <div className='menu'>

                <header>
                    <div className='titulo'>
                        <h2>Escolha um treino...</h2>
                    </div>
                </header>
                
                <div className='cards'>

                    <Link to='/ex01' className='link'>
                        <div className='card'>
                            <div className='retangulo' style={{backgroundColor:'#FFCE37'}} />
                            <h3 className='titulo'>Cupom de desconto</h3>
                            <h4 className='subtitulo'>Exercício 01</h4>
                        </div>
                    </Link>

                    <Link to='/ex02' className='link'>
                        <div className='card'>
                            <div className='retangulo' style={{backgroundColor: '#B3FF37'}} />
                            <h3 className='titulo'>Converter Kg/gramas</h3>
                            <h4 className='subtitulo'>Exercício 02</h4>
                        </div>
                    </Link>

                    <Link to='/ex03' className='link'>
                        <div className='card'>
                            <div className='retangulo' style={{backgroundColor: '#37FFF3'}} />
                            <h3 className='titulo'>Valor total por quantidade</h3>
                            <h4 className='subtitulo'>Exercício 03</h4>
                        </div>
                    </Link>

                    <Link to='/ex04' className='link'>
                        <div className='card'>
                            <div className='retangulo' style={{backgroundColor: '#37B7FF'}} />
                            <h3 className='titulo'>Leitura de livro</h3>
                            <h4 className='subtitulo'>Exercício 04</h4>
                        </div>
                    </Link>
                    
                    <Link to='/ex05' className='link'>
                        <div className='card'>
                            <div className='retangulo' style={{backgroundColor: '#CB37FF'}} />
                            <h3 className='titulo'>Média de notas</h3>
                            <h4 className='subtitulo'>Exercício 05</h4>
                        </div>
                    </Link>

                    <Link to='/ex06' className='link'>
                        <div className='card'>
                            <div className='retangulo' style={{backgroundColor: '#FF5B37'}} />
                            <h3 className='titulo'>Salário líquido</h3>
                            <h4 className='subtitulo'>Exercício 06</h4>
                        </div>
                    </Link>

                    <Link to='/ex07' className='link'>
                        <div className='card'>
                            <div className='retangulo' style={{backgroundColor: '#37FFAB'}} />
                            <h3 className='titulo'>Cores primárias</h3>
                            <h4 className='subtitulo'>Exercício 07</h4>
                        </div>
                    </Link>

                    <Link to='/ex08' className='link'>
                        <div className='card'>
                            <div className='retangulo' style={{backgroundColor: '#151515'}} />
                            <h3 className='titulo'>Temperatura</h3>
                            <h4 className='subtitulo'>Exercício 08</h4>
                        </div>
                    </Link>

                    <Link to='/ex09' className='link'>
                        <div className='card'>
                            <div className='retangulo' style={{backgroundColor: '#D0D0D0'}} />
                            <h3 className='titulo'>Sorveteria</h3>
                            <h4 className='subtitulo'>Exercício 09</h4>
                        </div>
                    </Link>


                    <Link to='/ex10' className='link'>
                        <div className='card'>
                            <div className='retangulo' style={{backgroundColor: '#B75333'}} />
                            <h3 className='titulo'>Calculo de IMC com historico</h3>
                            <h4 className='subtitulo'>Exercício 10</h4>
                        </div>
                    </Link>

                    <Link to='/ex11' className='link'>
                        <div className='card'>
                            <div className='retangulo' style={{backgroundColor: '#6533B7'}} />
                            <h3 className='titulo'>Tabuada</h3>
                            <h4 className='subtitulo'>Exercício 11</h4>
                        </div>
                    </Link>

                    <Link to='/ex12' className='link'>
                        <div className='card'>
                            <div className='retangulo' style={{backgroundColor: '#FFCE37'}} />
                            <h3 className='titulo'>Comparador de pessoas</h3>
                            <h4 className='subtitulo'>Exercício 12</h4>
                        </div>
                    </Link>

                </div>
            </div>
        </div>
    )
}