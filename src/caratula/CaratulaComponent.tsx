import { RegistroComponent } from "../registro/Registro";
import './Caratula.css'

export function CaratulaComponent(){
    return(
        <section className="caratula">
            <div className="left-side">
                <h1>Mi sitio</h1>
                <h2>Aprende con nosotros</h2>
                <p>Explora nuestros cursos</p>
                <p>Y accede a ellos en nuestra aula.</p>
            </div>
            <div className="right-side">
                <RegistroComponent></RegistroComponent>
            </div>

        </section>
    );
}