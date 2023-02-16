import { useState } from 'react';
import './NavBar.css'
import { SideBar } from './SideBar';
import menuItems from './menuItems';
export function NavBar(){

    const [sideBarVisible, setSideBarVisible] = useState(false);
    return(
        <div className='nav navbar'>
            <SideBar 
                translated = {sideBarVisible} 
                setSideBarVisible={setSideBarVisible } 
                items = {menuItems}
            />
            <a href="/">Business Logo</a>
            <ul id='menuItems'>
                {
                    menuItems.map((e)=>(
                        <li key={e.name}><a href={e.link}>{e.name}</a></li>
                    ))
                }
            </ul>
            <ul id='authItems'>
                <li><a href="/">Ingrese</a></li>
                <li><a href="/#registro">Regístrese</a></li>
                <button onClick={()=>setSideBarVisible(!sideBarVisible)} className='navToggler'>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </ul>
        </div>
    );
}