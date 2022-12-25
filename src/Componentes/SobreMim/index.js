import Lucas from '../../assets/lucas.jpg'

import './style.css'

const SobreMim = (props) => {

    return (

        <section id='containerSobre'>
            <div className='imagemLucas'>
                <img src={Lucas} className={props.background ? 'imgLucasDark' : 'imgLucasLight'}></img>
            </div>
            <div className={props.background ? 'textDark' : 'textLight'}>
                <h3>Sobre mim</h3>
                <p>Olá me chamo Lucas Agapito, no momento estou graduando no curso Ciência da Computação pela Faculdade Descomplica e aliado a isto realizo também um curso FullStack pela plataforma <strong>DevMedia</strong>. Tenho uma vivência com a área de TI a alguns anos e agora estou me desvendando na área de desenvolvimento. Desenvolvo projetos com foco nas tecnologias de Front End, realizando estudos diáriamente e práticas com Javascript e React Js.</p>
            </div>
        </section>
    )
}

export default SobreMim;