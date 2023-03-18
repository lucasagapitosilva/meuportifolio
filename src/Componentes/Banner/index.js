
import './style.css'

const Banner = (props) => {

    const typing = document.querySelector('[data-js="typing"]');
    const messages = ['Desenvolvedor Front End', 'Desenvolvedor Javascript'];

    let messageIndex = 0
    let characterIndex = 0
    let currentMessage = ''
    let currentCharacters = ''

    const type = () => {
        if(messageIndex === messages.length) {
            messageIndex = 0
        }
        
        currentMessage = messages[messageIndex]
        currentCharacters = currentMessage.slice(0, characterIndex++)
        typing.textContent = messages[0]

        if(currentCharacters.length === currentMessage.length) {
            messageIndex++
            characterIndex = 0
        }
    }

    setInterval(type, 100)

    return (


        <section className="containerBanner">
            <div className='containerHello'>
                <p className={props.background ? 'firstParagraphDark' : 'firstParagraphLight'}>Hello World!</p>
                <h1 className={props.background ? 'titleDark' : 'titleLight'}>Oi, sou Lucas Agapito...</h1>
                <h2 className={props.background ? 'subTitleDark' : 'subTitleLight'} data-js='typing'></h2>
            </div>
        </section>
    )
}

export default Banner;