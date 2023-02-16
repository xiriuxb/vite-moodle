import './InfoComponent.css'

interface Props{
    contenido:{tema:string, description?:string, items:{name:string, description?:string}[]}
}

export function InfoComponent({contenido}:Props){
    return(
        <section id='info-comp'>
            <h2>{contenido.tema}</h2>
            <h3>{contenido.description}</h3>
            <ul>
                {
                    contenido.items.map(({name, description})=>(
                        <li key={name}>{name} <span>{description}</span></li>
                    ))     
                }
            </ul>

        </section>
    )
}