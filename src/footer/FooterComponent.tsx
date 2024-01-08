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
            <div className='flex flex-wrap justify-evenly grid-cols-1 sm:grid-cols-2 md:grid-cols-3 border-t-2 p-10 border-indigo-700 text-slate-500'>
                <section className=''>
                    <h3 className='text-xl text-slate-700 font-bold pb-4'>Enlaces importantes</h3>
                    <ul>
                        {
                            enlaces.map(({link,name})=>(
                                <li className='pb-2 hover:text-slate-900' key={name}><a className='underline' href={link}>{name}</a></li>
                            ))
                        }
                    </ul>
                </section>
                <div>
                    <h3 className='text-xl text-slate-700 font-bold pb-4'>Contactos</h3>
                    <ul>
                        {
                            contactos.map(({name, info})=>(
                                <li className='pb-2 hover:text-slate-900 cursor-default' key={name}>{`${name} : ${info}`}</li>
                            ))
                        }
                    </ul>
                </div>
                <div>
                    <h3 className='text-xl text-slate-700 font-bold pb-4'>Síguenos en nuestras redes</h3>
                    <ul>
                        {
                            redes.map(({link,name})=>(
                                <li className='pb-2 hover:text-slate-900' key={name}><a className='underline' href={link}>{name}</a></li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            <div className='flex justify-between items-center bg-indigo-800 min-h-14 px-5 text-slate-100 border-t-2 border-indigo-600'>
                <a href='/'>Business Logo</a>
                <p>© Copyright Jorge Trujillo. All Rights Reserved</p>
            </div>
        </footer>
    )
}