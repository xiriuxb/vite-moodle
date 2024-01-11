import { Link } from "react-router-dom";
import { LoginComponent } from "../login/LoginComponent";
import logo from '../assets/logo.png'

export function LoginPage(){
    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 w-full h-screen">
            <section className="w-5/6 lg:w-4/6 flex flex-col justify-normal md:justify-center justify-self-center">
                <Link className="w-11/12 m-5" to={'/'}>
                    <img src={logo} alt="Business name" />
                </Link>
                <LoginComponent />
                <div className="rounded-lg shadow-2xl flex flex-col">
                    <Link role="button" to={'/#registro'} className="font-bold py-2 bg-indigo-500 rounded-sm my-5 mx-5">
                        Registrarse
                    </Link>
                    <Link to={'/'} className="font-bold py-2 text-indigo-900 border-2 rounded-sm mb-5 mx-5">
                        Ingreso al aula <i className="fas fa-external-link-alt"></i>
                    </Link>
                </div>
            </section>
            <section className="hidden sm:block">
                <div className="relative h-screen">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-600"></div>
                    <div className="absolute inset-0 opacity-75 bg-black"></div>
                    <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold">
                        Awesome Background
                    </div>
                </div>
            </section>
        </div>
    )
}