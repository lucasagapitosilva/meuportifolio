import Cards from '../Cards/'

import Lista from '../../assets/listatarefa.gif'
import Design from '../../assets/agenciadesign.gif'
import Return from '../../assets/aguarde.gif'
import Dentista from '../../assets/dentista.gif'
import Primeflix from '../../assets/primeflix.png'

import './style.css'

const MeusProjetos = (props) => {

    return(

        <section id='containerProjetos' className={props.background ? 'projectsDark' : 'projectsLight'}>
            <h3>Meus projetos</h3>
            <div id='containerCards'>
                <Cards
                titulo='Lista de tarefas'
                imagemProjeto={Lista}
                informacao='Projeto realizado para tarefas, podendo fazer login e também cadastro. Usado a reutilização de componentes e useEffect para melhor performance.'
                linkGit='https://github.com/lucasagapitosilva/lista-de-tarefas'
                linkOlho='https://lista-de-tarefas-sepia-nine.vercel.app'
                tecnologias='Javascript - React Js - Firebase'
                background={props.background}
                />

                <Cards
                titulo='Agência de design'
                imagemProjeto={Design}
                linkGit='https://github.com/lucasagapitosilva/agencia-design'
                linkOlho='https://agencia-design-hazel.vercel.app/'
                informacao='Website realizado com as tecnologias de Javascript e React Js, utilizando componentes, useState e props. Adicionado também o uso do dark mode.'
                tecnologias='Javascript - React Js'
                background={props.background}
                />

                <Cards
                titulo='Clínica Dentista'
                imagemProjeto={Dentista}
                linkGit='https://github.com/lucasagapitosilva/ClinicaDentista'
                linkOlho='https://clinica-dentista.vercel.app/'
                informacao='Projeto focado na utilização de Spa que faz com que a navegação flua com agilidade sem recarregar a página.'
                tecnologias='Javascript - React Js'
                background={props.background}
                />

                <Cards
                titulo='Prime Flix'
                imagemProjeto={Primeflix}
                linkGit='https://github.com/lucasagapitosilva/ProjetoFilmes'
                linkOlho='https://projeto-filmes-zeta.vercel.app'
                informacao='Projeto consumindo API para informar detalhes de filmes e avaliações, dar para salvar na lista e assistir aos trailers.'
                tecnologias='Javascript - React Js'
                background={props.background}
                />

                <Cards 
                titulo='Projeto em andamento..'
                imagemProjeto={Return}
                informacao='Um novo projeto está sendo realizado neste momento'
                background={props.background}
                />
                
            </div>
        </section>
    )
}

export default MeusProjetos;