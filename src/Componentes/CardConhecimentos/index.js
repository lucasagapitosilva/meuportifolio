
import './style.css'

const CardConhecimentos = (props) => {

    return (

        <div className={props.background ? 'containerTechCardDark' : 'containerTechCardLight'}>
            <img id='techImageCard' src={props.imagemTecnologia}></img>
            <p className={props.background ? 'cardInfoDark' : 'cardInfoLight'}>{props.informacaoTecnologia}</p>
        </div>
    )
}

export default CardConhecimentos;