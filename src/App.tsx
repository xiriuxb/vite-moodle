import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { NavBar } from './navbar/NavBar'
import { CaratulaComponent } from './caratula/CaratulaComponent'
import { InfoComponent } from './info/InfoComponent'
import { FooterComponent } from './footer/FooterComponent'
import { SideBar } from './navbar/components/SideBar'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { LandingPage } from './pages/LandingPage'

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
    <Provider store={store}>
      <SideBar/>
      <NavBar></NavBar>
      <LandingPage></LandingPage>
      <FooterComponent />
    </Provider>
  )
}

export default App
