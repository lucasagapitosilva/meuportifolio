/* import { useState, useEffect } from 'react'; */

import Linkedin from '../../assets/linkedin.png'
import GitHub from '../../assets/github.png'
/* import Instagram from '../../assets/instagram.png'
import Facebook from '../../assets/facebook.png' */
import WhatsApp from '../../assets/whatsapp.png'
import Moon from '../../assets/lua.png'
import Sun from '../../assets/sol.png'

import './style.css'

const Topo = (props) => {


    /* const [horas, setHoras] = useState('');
    const [dia, setDia] = useState('');

    useEffect(() => {
        const intervalId = setInterval(() => {
            const dataAtual = new Date();
            const hora = dataAtual.getHours();
            const minutos = dataAtual.getMinutes();
            const segundos = dataAtual.getSeconds();

            setHoras(`${hora < 10 ? '0' + hora : hora}:${minutos < 10 ? '0' + minutos : minutos}:${segundos < 10 ? '0' + segundos : segundos}`)
        }, 1000)

        return () => clearInterval(intervalId);
    }, [])

    useEffect(() => {
        const diaAtual = new Date();
        const dia = diaAtual.getDate();
        const mes = diaAtual.getMonth() + 1;
        const ano = diaAtual.getFullYear();

        setDia(`${dia < 10 ? '0' + dia : dia}/${mes < 10 ? '0' + mes : mes}/${ ano }`);
    }, []) */


    return (

        <header>
            <div className='containerTopo'>
                <button onClick={props.changeBackground} className={props.background ? 'botaoDark' : 'botaoLight'}><img src={props.background ? Sun : Moon}></img></button>
                <nav className={props.background ? 'containerNavDark' : 'containerNavLight'}>
                    <a href='#containerSobre'>Sobre mim</a>
                    <a href='#containerProjetos'>Meus Projetos</a>
                    <a href='#containerConhecimentos'>Conhecimentos</a>
                    <a href='#containerContato'>Contato</a>
                </nav>

                <nav id='containerSociais'>
                    <a href='https://www.linkedin.com/in/lucas-agapito-931744207/'><img src={Linkedin} className='logoSociais'></img></a>
                    <a href='https://github.com/lucasagapitosilva'><img src={GitHub} className='logoSociais img-git'></img></a>
                    {/* <a href='https://www.instagram.com/luucasagapito/'><img src={Instagram} className='logoSociais'></img></a>
                    <a href='https://www.facebook.com/lucas.nascimento.5623'><img src={Facebook} className='logoSociais'></img></a> */}
                    <a href='https://wa.me/+5521997794042'><img src={WhatsApp} className='logoSociais'></img></a>
                </nav>
            </div>

            {/* <div className={props.background ? 'horaDark' : 'horaLight'}>
                <span>{dia} {horas}</span>
            </div> */}
        </header>
    )
}

export default Topo;