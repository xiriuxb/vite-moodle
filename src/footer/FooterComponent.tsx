import './Footer.css'
export function FooterComponent(){

    const enlaces =[
        {link:'', name:'Página inicial'},
        {link:'', name:'Quienes somos'},
        {link:'', name:'¿Necesitas ayuda?'},
        {link:'', name:'Cursos'},
        {link:'', name:'Aula Virtual'},
    ]

    const contactos = [
        {name:'Correo', info:'email@example.xd'},
        {name:'teléfono', info:'099999999'},
        {name:'dirección 1', info:'NA-NA-Ecuador'},
    ]

    const redes = [
        {name:'Facebook', link:'https://www.facebook.com'},
        {name:'Twitter', link:'https://www.twitter.com'},
        {name: 'Instagram', link: 'https://www.instagram.com'},
    ]
    return (
        <footer>
            <div className='infoFooter'>
                <div>
                    <h3>Enlaces importantes</h3>
                    <ul>
                        {
                            enlaces.map(({link,name})=>(
                                <li key={name}><a href={link}>{name}</a></li>
                            ))
                        }
                    </ul>
                </div>
                <div>
                    <h3>Contactos</h3>
                    <ul>
                        {
                            contactos.map(({name, info})=>(
                                <li key={name}>{`${name} : ${info}`}</li>
                            ))
                        }
                    </ul>
                </div>
                <div>
                    <h3>Síguenos en nuestras redes</h3>
                    <ul>
                        {
                            redes.map(({link,name})=>(
                                <li key={name}><a href={link}>{name}</a></li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            <div className='copyright'>
                <p>Copyright: Yo pues</p>
            </div>
        </footer>
    )
}