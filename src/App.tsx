import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { NavBar } from './navbar/NavBar'
import { CaratulaComponent } from './caratula/CaratulaComponent'
import { InfoComponent } from './info/InfoComponent'

function App() {

  const data = {
    tema:'Enfócate en las habilidades que necesitas reforzar',
    description:'Prepárate para alcanzar tus objetivos con profesores particulares',
    items:[{name:'Item1'},{name:'Item3'}, {name:'Item2'}]
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
    </>
  )
}

export default App
