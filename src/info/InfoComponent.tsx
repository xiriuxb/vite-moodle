import './InfoComponent.css'

interface Props{
    contenido:{tema:string, description?:string, items:{name:string, description?:string, icon?:string}[]}
}

export function InfoComponent({contenido}:Props){
    return(
        <section id='info-comp'>
            <h2>{contenido.tema}</h2>
            <h3>{contenido.description}</h3>
            <ul>
                {
                    contenido.items.map(({name, description,icon})=>(
                        <li key={name}>
                            {icon&&<img src={icon}></img>}
                            <h4>{name} </h4>
                            <span>{description}</span>
                        </li>
                    ))     
                }
            </ul>
        </section>
    )
}