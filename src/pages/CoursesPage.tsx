import { Link } from "react-router-dom"

type TMenuItem = {
    description:string,
    link?:string,
}

const orderBy = {
    title:'Order by',
    items:[{description:'Precio: mayor-menor',link:'/'}]
}

const categories = {
    title:'Categories',
    items:[
        {description:'Category 1', link:'/'},
        {description:'Category 2', link:'/'}
    ]
}

export function CoursesPage(){
    return(
        <section className="pt-16 text-slate-700">
            <div>
                <h2 className="text-5xl font-bold">Cursos</h2>
                <OrderByComponent title={orderBy.title} items={orderBy.items} />
            </div>
            <div>

            </div>
        </section>
    )
}

export function OrderByComponent({title, items}:{title:string, items:TMenuItem[]}){
    return(<div>
        <button>{title}</button>
        <div>
            <ul>
                {
                    items.map((it:TMenuItem)=>{
                        return(<li><Link to={'/cursos/s/'}>{it.description}</Link></li>)
                    })
                }
            </ul>
        </div>
    </div>)
}