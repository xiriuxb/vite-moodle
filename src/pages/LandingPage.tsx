import { CaratulaComponent } from "../caratula/CaratulaComponent"
import { InfoComponent, steps, pagos, benefits } from "../info/InfoComponent"

export const LandingPage = () =>{
    return(
        <section className="pt-10 px-3 md:px-10">
            <CaratulaComponent />
            <InfoComponent key={'steps'} contenido={steps}></InfoComponent>
            <InfoComponent key={'benefits'} contenido={benefits} />
            <InfoComponent key={'payments'} contenido={pagos}/>
        </section>
    )
}