import { useState, useEffect } from 'react';
import './style.css'

export default function Banner(props) {
    const [nome, setNome] = useState('');
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(150);

    const [subject, setSubject] = useState(true);

    useEffect(() => {
        const texto = 'Desenvolvedor Front End - React Js';

        if (isDeleting) {
            setNome(texto.substring(0, index - 1));
        } else {
            setNome(texto.substring(0, index + 1));
        }

        if (!isDeleting && index === texto.length) {
            setIsDeleting(true);
            setTypingSpeed(100)
        } else if (isDeleting && index === 0) {
            setIsDeleting(false);
            setTypingSpeed(150);
        }

        const delay = isDeleting ? typingSpeed / 2 : typingSpeed;

        const timer = setTimeout(() => {
            setIndex(isDeleting ? index - 1 : index + 1);
        }, delay);

        return () => clearTimeout(timer);
    }, [index, isDeleting]);

    useEffect(() => {
        const timerSubject = setInterval(() => {
            setSubject(s => !s);
        }, 3000);

        return () => clearInterval(timerSubject);
    }, []);


    return (
        <section className="containerBanner">
            <div className='containerHello'>
                <p className={`hello ${subject ? 'show-en' : 'show-pt'} ${props.background ? 'firstParagraphDark' : 'firstParagraphLight'}`}>{subject ? 'Hello World!' : 'Olá Mundo!'}</p>
                <h1 className={props.background ? 'titleDark' : 'titleLight'}>Oi, sou Lucas Agapito...</h1>
                <h2 className={props.background ? 'subTitleDark' : 'subTitleLight'} id='textMessage'>{nome}</h2>
            </div>
        </section>
    )
}