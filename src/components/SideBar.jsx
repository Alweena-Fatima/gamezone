import React, { useState } from 'react'
import './SideBar.css'
import NavoptionList from '../data/NavoptionList';
import Navoption from './Navoption';
function SideBar({ DarkMode, hide}) {
    const [navData, setNavData] = useState(NavoptionList); // keep this

    return (
        <>
            <div className={`sidebar ${DarkMode ? 'dark' : 'light'} ${hide ? 'collapsed' : ''}`}>
                <a href='#' className='logo'>
                    <i className="bi bi-dpad"></i>
                    <span className='logoName'>Arena
                    </span></a>

                <ul className='option'>
                    {
                        navData.filter(item => item.name !== 'Contact')
                            .map(item => <Navoption key={item._id} item={item} />)
                    }
                </ul>

                <ul className='Contact'>
                    {
                        navData.filter(item => item.name === 'Contact')
                            .map(item => <Navoption key={item._id} item={item} />)
                    }
                </ul>




            </div>
        </>
    )
}

export default SideBar
