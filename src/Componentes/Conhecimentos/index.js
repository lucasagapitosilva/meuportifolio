import CardConhecimentos from '../CardConhecimentos/'

import tecHTML from '../../assets/html.png'
import tecCSS from '../../assets/css.png'
import tecJs from '../../assets/js.png'
import tecReact from '../../assets/react.png'

import './style.css'

const Conhecimentos = (props) => {

    return (

        <section id='containerConhecimentos'>
            <h3 className={props.background ? 'subtitleTechDark' : 'subtitleTechLight'}>Conhecimentos</h3>

            <div className='containerConhecimentosCards'>
                <CardConhecimentos
                    imagemTecnologia={tecHTML}
                    informacaoTecnologia='HTML5 é uma linguagem de marcação de hipertexto, que usamos para marcar os elementos da página e construí-la.'
                    background={props.background}
                />

                <CardConhecimentos
                    imagemTecnologia={tecCSS}
                    informacaoTecnologia='CSS3 é uma linguagem de estilo usada para descrever a apresentação dos elementos da página os estilizando.'
                    background={props.background}
                />

                <CardConhecimentos
                    imagemTecnologia={tecJs}
                    informacaoTecnologia='JavaScript é uma linguagem de programação interpretada usada no desenvolvimento web para descrever funcionalidades e comportamentos da página.'
                    background={props.background}
                />

                <CardConhecimentos
                    imagemTecnologia={tecReact}
                    informacaoTecnologia='O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.'
                    background={props.background}
                />
            </div>
        </section>
    )
}

export default Conhecimentos;