import './index.scss'
import Cabecalho from '../components/cabecalho'
import InfoEx from '../components/infoEx'
import { useState } from 'react'

export default function Ex12() {
    const [nome, setNome] = useState('')
    const [idade, setIdade] = useState(0)

    const [editar, setEditar] = useState(-1)

    //radio
    const [genero, setGenero] = useState('')

    //todos os registros
    const [registros, setRegistros] = useState([])

    //estatisticas
    const [pessoaMaisVelha, setPessoaMaisVelha] = useState('')
    const [NomePessoaMaisVelha, setNomePessoaMaisVelha] = useState('')

    const [mulherMaisJovem, setMulherMaisJovem] = useState('')
    const [MulherNome, setNomeMulherMaisJovem] = useState('')

    const [somaIdades, setSomaIdades] = useState(0)
    const [media, setMedia] = useState(0)

    const [homensMaisTrinta, setHomensMaisTrinta] = useState(0)
    const [mulheresMenosDezoito, setMulheresMenosDezoito] = useState(0)

    function adicionarRegistro() {
        //alert(nome);
        //alert(idade);
        //alert(genero);

        if (!nome || !idade || !genero) {
            alert('Preencha todos os campos')
            return
        }

        //pesoa mais velha
        if (pessoaMaisVelha === '') {
            setPessoaMaisVelha(idade)
            setNomePessoaMaisVelha(nome)
        }else if (idade > pessoaMaisVelha) {
            setPessoaMaisVelha(idade)
            setNomePessoaMaisVelha(nome)
        }
        
        //mulher maais jovem
        if (mulherMaisJovem === '' && genero === 'feminino') {
            setMulherMaisJovem(idade)
            setNomeMulherMaisJovem(nome)
        }else if (idade < mulherMaisJovem && genero === 'feminino') {
            setMulherMaisJovem(idade)
            setNomeMulherMaisJovem(nome)
        }

        //media das idades
        if (media === 0) {
            setMedia(idade)
        }else{
            let soma = somaIdades + idade
            setSomaIdades(soma)

            let calculoMedia = soma / registros.length 
            setMedia(calculoMedia)
        }
        
        //Homens com mais de 30
        if (idade > 30 && genero === 'masculino') {
            setHomensMaisTrinta(homensMaisTrinta + 1)
        }

        //Mulheres com menos de 18
        if (idade < 18 && genero === 'feminino') {
            setMulheresMenosDezoito(mulheresMenosDezoito + 1)
        }

        if (editar !== -1) {
            const novosRegistros = [...registros];

            novosRegistros[editar] = {
                nome,
                idade,
                genero,
            };

            setRegistros(novosRegistros);
            setEditar(-1);
        }else{
            setRegistros([...registros, { nome, idade, genero }])
        }

        //limpar inputs
        setNome('')
        setIdade(0)
        setGenero('')
    }

    function alterarRegistro(pos) {
        let registro = registros[pos]

        setEditar(pos);
        setNome(registro.nome);
        setIdade(registro.idade);
        setGenero(registro.genero);
    }

    function removerRegistro(pos) {
        registros.splice(pos, 1)
        setRegistros([...registros])
    }

    return (
        <div className='pagina-ex12'>
            <Cabecalho />

            <div className='exercicio'>
                <InfoEx
                    titulo="Exercício 12 - Comparador de pessoas"
                    corFaixa="#FFCE37"
                    descricao="Implemente um programa em Javascript que leia o nome, a idade, e o sexo de várias pessoas."
                />


                <div className='section'>

                    <div className='formulario'>
                        <div className='campos'>
                            <div className='entradas'>
                                <div className='campo'>
                                    <label>Nome</label>
                                    <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
                                </div>
                                <div className='campo'>
                                    <label>idade</label>
                                    <input type="text" value={idade} onChange={(e) => setIdade(Number(e.target.value))} />
                                </div>
                                <div className='campo'>
                                    <label>Sexo</label>

                                    <div className='radios'>
                                        <input type="radio"
                                            id="masculino"
                                            name="genero"
                                            value="masculino"
                                            checked={genero === 'masculino'}
                                            onChange={(e) => setGenero(e.target.value)}
                                        />
                                        <label htmlFor="masculino">Masculino</label>

                                        <input
                                            type="radio"
                                            id="feminino"
                                            name="genero"
                                            value="feminino"
                                            checked={genero === 'feminino'}
                                            onChange={(e) => setGenero(e.target.value)}
                                        />
                                        <label htmlFor="feminino">Feminino</label>
                                    </div>

                                </div>
                            </div>
                            <button className='executar' onClick={adicionarRegistro}>Executar</button>
                        </div>

                        <div className='resultado'>
                            <p>Pessoa mais velha: {NomePessoaMaisVelha}</p>
                            <p>Mulher mais jovem: {MulherNome}</p>
                            <p>Media de idade: {media}</p>
                            <p>Homens com mais de 30: {homensMaisTrinta}</p>
                            <p>Mulheres com menos de 18: {mulheresMenosDezoito} </p>
                        </div>

                    </div>
                    <div className='registros'>
                        <h3>Pessoas</h3>
                        <div className='faixa' style={{ background: "#6533B7" }} />

                        <div className='cards'>
                            {registros.map((item, pos) => (
                                <div key={pos} className='card'>
                                    <div className='infos'>
                                        <div className='geral'>
                                            <p>{item.nome}</p>
                                            <p>{item.idade}</p>
                                        </div>

                                        <div className='genero'>
                                            <p>{item.genero}</p>
                                        </div>
                                    </div>

                                    <div className='editar-apagar'>
                                        <button className='editar' onClick={() => alterarRegistro(pos, registros[pos])}>Editar</button>
                                        <button className='apagar' onClick={() => removerRegistro(pos)}>Apagar</button>
                                    </div>

                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}