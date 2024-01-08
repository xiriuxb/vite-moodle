import './App.css'
import { NavBar } from './navbar/NavBar'
import { FooterComponent } from './footer/FooterComponent'
import { SideBar } from './navbar/components/SideBar'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { LandingPage } from './pages/LandingPage'

function App() {
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
