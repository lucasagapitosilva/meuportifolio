import Linkedin from '../../assets/linkedin.png'
import GitHub from '../../assets/github.png'
/* import Instagram from '../../assets/instagram.png'
import Facebook from '../../assets/facebook.png' */
import WhatsApp from '../../assets/whatsapp.png'

import './style.css'

const Footer = (props) => {

    return (

        <footer>
            <div id='containerFooter'>
                <p id={props.background ? 'paragraphFooterDark' : 'paragraphFooterLight'}>©2022 - Desenvolvedor Lucas Agapito <br></br> Todos os direitos reservados.</p>

                <nav id='containerSociais'>
                    <a href='https://www.linkedin.com/in/lucas-agapito-931744207/'><img src={Linkedin} className='logoSociais'></img></a>
                    <a href='https://github.com/lucasagapitosilva'><img src={GitHub} className='logoSociais img-git'></img></a>
                    {/* <a href='https://www.instagram.com/luucasagapito/'><img src={Instagram} className='logoSociais'></img></a>
                    <a href='https://www.facebook.com/lucas.nascimento.5623'><img src={Facebook} className='logoSociais'></img></a> */}
                    <a href='https://wa.me/+5521997794042'><img src={WhatsApp} className='logoSociais'></img></a>
                </nav>
            </div>
        </footer>
    )
}

export default Footer;