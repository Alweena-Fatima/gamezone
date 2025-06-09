import React, { useState } from 'react'
import './SideBar.css'
import NavoptionList from '../data/NavoptionList';
import Navoption from './Navoption';
function SideBar({ DarkMode, setDarkMode, hide, sethide }) {
    const [navData, setNavData] = useState(NavoptionList); // keep this

    return (
        <>
            <div className={`TOP ${DarkMode ? 'dark' : 'light'}`}>
                <a href='#' className='logo'>
                    <i className="bi bi-dpad"></i>
                    <span className='logoName'>Arena
                    </span>
                    <div className="filter">
                        <a href='#' className='fill' onClick={sethide}>
                            <i className={`bi ${hide ? 'bi-toggle2-on' : 'bi-toggle2-off'}`}></i>

                        </a>

                    </div>

                </a>

                <a href='#' className='RightTop' >
                    <a href='#' className='mode' onClick={setDarkMode}>
                        <i className={`bi ${DarkMode ? 'bi-sun-fill' : 'bi-moon-fill'}`}></i>

                    </a>

                    <span className='logoName'><i class="bi bi-person"></i> Profile </span>

                </a>



            </div>
           <div className={`sidebar ${DarkMode ? 'dark' : 'light'} ${hide ? 'collapsed' : ''}`}>


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
