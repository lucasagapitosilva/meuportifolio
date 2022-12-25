import Email from '../../assets/email.png'
import WhatsApp from '../../assets/whatsapp.png'

import './style.css'

const Contato = (props) => {

    return (

        <section id={props.background ? 'containerContactDark' : 'containerContactLight'}>
            <h3 id={props.background ? 'titleContactDark' : 'titleContactLight'}>Contatos</h3>
            <div id='sociaisContato'>
                <figure id={props.background ? 'containerLinksDark' : 'containerLinksLight'}>
                    <a href='mailto:lucasbezerra.rocinha@gmail.com'><img src={Email}></img></a>
                    <figcaption><a href='mailto:lucasbezerra.rocinha@gmail.com'>lucasbezerra.rocinha@gmail.com</a></figcaption>
                </figure>

                <figure id={props.background ? 'containerLinksDark' : 'containerLinksLight'}>
                    <a href='https://wa.me/+5521997794042'><img src={WhatsApp}></img></a>
                    <figcaption><a href='https://wa.me/+5521997794042'>(21) 9 9779-4042</a></figcaption>
                </figure>

            </div>
        </section>
    )
}

export default Contato;