import Cards from '../Cards/'

import Lucas from '../../assets/portifolio.gif'
import Design from '../../assets/agenciadesign.gif'
import Return from '../../assets/aguarde.gif'

import './style.css'
import { isVisible } from '@testing-library/user-event/dist/utils'

const MeusProjetos = (props) => {

    return(

        <section id='containerProjetos' className={props.background ? 'projectsDark' : 'projectsLight'}>
            <h3>Meus projetos</h3>
            <div id='containerCards'>
                <Cards
                titulo='Meu Portifólio'
                imagemProjeto={Lucas}
                informacao='Portifólio feito com as tecnologias de Javascript e React Js, utilizando componentes, useState e props para aperfeiçoar o portifólio.'
                linkGit='https://www.google.com.br/'
                linkOlho='https://www.google.com.br/'
                tecnologias='HTML5 - CSS3 - Javascript - React Js'
                background={props.background}
                />
                <Cards
                titulo='Agência de design'
                imagemProjeto={Design}
                linkGit='https://github.com/lucasagapitosilva/agencia-design'
                linkOlho='https://agencia-design-hazel.vercel.app/'
                informacao='Portifólio feito com as tecnologias de Javascript e React Js, utilizando componentes, useState e props para aperfeiçoar o portifólio.'
                tecnologias='HTML5 - CSS3 - Javascript - React Js'
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