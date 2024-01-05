import { RegistroComponent } from "../registro/Registro";
import './Caratula.css'

export function CaratulaComponent(){
    return(
        <section className="flex flex-row flex-wrap justify-evenly py-10 px-3 caratula-bg">
            <div className="grid content-evenly text-gray-700">
                <h1 className="text-6xl font-extrabold">Educa Online</h1>
                <h2 className="text-3xl md:text-4xl font-bold">Aprende con nosotros</h2>
                <div>
                    <p className="text-2xl ">
                        Explora nuestros&nbsp;
                        <a href="/" className="underline text-indigo-700">cursos</a>
                    </p>
                    <p className="text-2xl ">
                        Y accede a ellos en nuestra&nbsp;
                        <a href="/" className="underline text-indigo-700">
                            aula&nbsp;
                            <span><i className="fas fa-external-link-alt text-base"></i></span>
                        </a>.
                    </p>
                </div>
            </div>
            <div className="py-4 ">
                <RegistroComponent></RegistroComponent>
            </div>

        </section>
    );
}