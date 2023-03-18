import Cards from '../Cards/'

import Lucas from '../../assets/portifolio.gif'
import Design from '../../assets/agenciadesign.gif'
import Return from '../../assets/aguarde.gif'
import Dentista from '../../assets/dentista.gif'
import Animais from '../../assets/alternando.gif'

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
                linkGit='https://github.com/lucasagapitosilva/meuportifolio'
                linkOlho='https://www.google.com.br/'
                tecnologias='HTML5 - CSS3 - Javascript - React Js'
                background={props.background}
                />

                <Cards
                titulo='Agência de design'
                imagemProjeto={Design}
                linkGit='https://github.com/lucasagapitosilva/agencia-design'
                linkOlho='https://agencia-design-hazel.vercel.app/'
                informacao='Website realizado com as tecnologias de Javascript e React Js, utilizando componentes, useState e props. Adicionado também o uso do dark mode.'
                tecnologias='HTML5 - CSS3 - Javascript - React Js'
                background={props.background}
                />

                <Cards
                titulo='Clínica Dentista'
                imagemProjeto={Dentista}
                linkGit='https://github.com/lucasagapitosilva/ClinicaDentista'
                linkOlho='https://clinica-dentista.vercel.app/'
                informacao='Projeto focado na utilização de Spa que faz com que a navegação flua com agilidade sem recarregar a página.'
                tecnologias='HTML5 - CSS3 - Javascript - React Js'
                background={props.background}
                />

                <Cards
                titulo='Alternando animais'
                imagemProjeto={Animais}
                linkGit='https://github.com/lucasagapitosilva/Alternando-animais'
                linkOlho='https://alternando-animais.vercel.app/'
                informacao='Mini projeto feito para aprimorar a habilidade de props com useState.'
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