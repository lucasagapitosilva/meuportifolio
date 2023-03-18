import { useState } from 'react';
import './style.css'

const Banner = (props) => {

    const [nome, setNome] = useState('Desenvolvedor Front End - React Js');

    function loading() {
        
    }

    return (

        <section className="containerBanner">
            <div className='containerHello'>
                <p className={props.background ? 'firstParagraphDark' : 'firstParagraphLight'}>Hello World!</p>
                <h1 className={props.background ? 'titleDark' : 'titleLight'}>Oi, sou Lucas Agapito...</h1>
                <h2 className={props.background ? 'subTitleDark' : 'subTitleLight'} id='textMessage'>{nome}</h2>
            </div>
        </section>
    )
}

export default Banner;