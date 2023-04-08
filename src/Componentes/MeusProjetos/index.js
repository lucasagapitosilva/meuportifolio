import Cards from '../Cards/'

import Lista from '../../assets/tarefas.png';
import Pokemon from '../../assets/pokedex.png';
import Return from '../../assets/aguarde.gif'
import Chamados from '../../assets/chamados.png';
import Primeflix from '../../assets/primeflix.png'
import Repos from '../../assets/repos.png';

import './style.css'

const MeusProjetos = (props) => {

    return (

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
                    titulo='Pokedex'
                    imagemProjeto={Pokemon}
                    linkGit='https://github.com/lucasagapitosilva/ProjetoPokedex'
                    linkOlho='https://projeto-pokedex-murex.vercel.app'
                    informacao='Projeto realizado primeiro criando o desing e funcionalidades no Figma e depois partindo para o código consumindo a API do pokemon.'
                    tecnologias='Javascript - React Js'
                    background={props.background}
                />

                <Cards
                    titulo='Sistema de Chamados'
                    imagemProjeto={Chamados}
                    linkGit='https://github.com/lucasagapitosilva/projetochamados'
                    linkOlho='https://projetochamados.vercel.app'
                    informacao='Sistema com funcionalidades de criar usuarios apartir de email e password, criar chamados, editar e excluir.'
                    tecnologias='Javascript - React Js - Firebase'
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
                    titulo='Repositórios Github'
                    imagemProjeto={Repos}
                    linkGit='https://github.com/lucasagapitosilva/projetoRepos'
                    linkOlho='https://projeto-repos-theta.vercel.app'
                    informacao='Projeto realizado para fazer buscas de repositórios e issues. Consumindo API do Github.'
                    tecnologias='Javascript - React Js - Styled Components'
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