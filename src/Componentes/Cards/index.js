import GitHub from '../../assets/github.png'
import Olho from '../../assets/olho.png'

import './style.css'

const Cards = (props) => {

    return (

        <div className={props.background ? 'containerCardDark' : 'containerCardLight'}>
            <h4 id={props.background ? 'cardTitleDark' : 'cardTitleLight'}>{props.titulo}</h4>
            <img id='cardImagem' src={props.imagemProjeto}></img>
            <div className='links'>
                <a href={props.linkGit} className='gitLink' target='_blank'><img src={GitHub}></img></a>
                <a href={props.linkOlho} className='olhoLink' target='_blank'><img src={Olho}></img></a>
            </div>
            <p id={props.background ? 'cardInformacaoDark' : 'cardInformacaoLight'}>{props.informacao}</p>
            <p id={props.background ? 'cardTechDark' : 'cardTechLight'}>{props.tecnologias}</p>
        </div>
    )
}

export default Cards;