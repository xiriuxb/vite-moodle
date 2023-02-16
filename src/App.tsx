import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { NavBar } from './navbar/NavBar'
import { CaratulaComponent } from './caratula/CaratulaComponent'
import { InfoComponent } from './info/InfoComponent'
import { FooterComponent } from './footer/FooterComponent'

function App() {

  const data = {
    tema:'Enfócate en las habilidades que necesitas reforzar',
    description:'Prepárate para alcanzar tus objetivos con profesores particulares',
    items:[
      {name:'Item1', description:'no lo se rick', icon:reactLogo,},
      {name:'Item3', description: 'no lo se rick 2', icon:reactLogo,},
      {name:'Item2', icon:reactLogo, description:'idjsifjj asoidjoasijd oai djoasjdajdiajdoai jsd'},
      {name:'Item4', icon:reactLogo, description:'idjsifjj asoidjoasijd oai djoasjdajdiajdoai jsd'}
    ]
  }

  const pagos = {
    tema:'Diferentes formas de pago',
    description:'Se ajustan a tu método preferido.',
    items:[{name:'PayPal'},{name:'Depósito/Transferencia'}, {name:'Tarjeta de Crédito/Débito'}]
  }
  return (
    <>
    <NavBar></NavBar>
    <CaratulaComponent></CaratulaComponent>
    <InfoComponent contenido={data}/>
    <InfoComponent contenido={pagos}/>
    <FooterComponent></FooterComponent>
    </>
  )
}

export default App
