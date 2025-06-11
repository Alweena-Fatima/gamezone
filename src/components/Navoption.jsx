import React from 'react'
import './SideBar.css'
function Navoption({item,navOnClick}) {
    return (
        <li>
            <a href='#' className={`${item.active? 'active': undefined}`}onClick={()=>navOnClick(item._id)}> <i class={item.icon}></i> <span className='nameName'>{item.name}</span></a>
        </li>
    )
}

export default Navoption;
