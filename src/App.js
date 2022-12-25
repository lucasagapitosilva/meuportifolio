import Topo from './Componentes/Topo'
import Banner from './Componentes/Banner'
import SobreMim from './Componentes/SobreMim'
import MeusProjetos from './Componentes/MeusProjetos'
import Conhecimentos from './Componentes/Conhecimentos'
import Contato from './Componentes/Contato'
import Footer from './Componentes/Footer'

import { useState } from 'react'

import './App.css';

function App() {

  const [background, setBackground] = useState(false)

  const changeBackground = () => {

    setBackground(!background)

  }

  return (

    <div className={background ? 'containerApp-dark' : 'containerApp-light'}>
      <Topo changeBackground={changeBackground} background={background}/>
      <Banner changeBackground={changeBackground} background={background}/>
      <SobreMim changeBackground={changeBackground} background={background}/>
      <MeusProjetos changeBackground={changeBackground} background={background}/>
      <Conhecimentos changeBackground={changeBackground} background={background}/>
      <Contato changeBackground={changeBackground} background={background}/>
      <Footer changeBackground={changeBackground} background={background}/>
    </div>
  );
}

export default App;
