import './App.css'
import { NavBar } from './navbar/NavBar'
import { FooterComponent } from './footer/FooterComponent'
import { SideBar } from './navbar/components/SideBar'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { LandingPage } from './pages/LandingPage'
import { BrowserRouter, RouterProvider } from 'react-router-dom'
import { MainRouter } from './router/MainRouter'
import { LoginRouter } from './router/LoginRouter'

function App() {
  return (
    <Provider store={store}>
        <BrowserRouter>
        <LoginRouter></LoginRouter>
        </BrowserRouter>
    </Provider>
  )
}

export default App
