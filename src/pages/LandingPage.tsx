import { CaratulaComponent } from "../caratula/CaratulaComponent"
import { InfoComponent, steps, pagos, benefits } from "../info/InfoComponent"

export const LandingPage = () =>{
    return(
        <section className="pt-10 px-3 md:px-10">
            <CaratulaComponent />
            <InfoComponent key={'steps'} contenido={steps}></InfoComponent>
            <InfoComponent key={'benefits'} contenido={benefits} />
            <InfoComponent key={'payments'} contenido={pagos}/>
            <div className="relative h-screen">
  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-600"></div>
  <div className="absolute inset-0 opacity-75 bg-black"></div>
  <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold">
    Awesome Background
  </div>
</div>
        </section>
    )
}