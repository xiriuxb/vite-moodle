import './NavBar.css'
interface Props {
    translated: boolean;
    setSideBarVisible:Function
    items:{name:string,link:string}[]
}
export function SideBar(props: Props) {
    return (
        <div className={props.translated ? 'nav sidebar' : 'nav sidebar translated'}>
            <div className='bar'>
                <ul id='menuItems'>
                {
                    props.items.map((e)=>(
                        <li key={e.name}><a href={e.link}>{e.name}</a></li>
                    ))
                }
                </ul>
                <ul id='authItems'>
                    <li><a href="/">Ingrese</a></li>
                    <li><a href="/#registro">Regístrese</a></li>
                </ul>
            </div>
            {props.translated && <div className='sideBarBack' onClick={()=>props.setSideBarVisible(!props.translated)}> </div>}
        </div>
    );
}