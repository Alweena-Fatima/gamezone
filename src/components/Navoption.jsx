import React from 'react'
import './SideBar.css'
function Navoption({item}) {
    return (
        <li>
            <a href='#'> <i class={item.icon}></i> <span className='nameName'>{item.name}</span></a>
        </li>
    )
}

export default Navoption;
