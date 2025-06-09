import React, { useState } from 'react'
import './SideBar.css'
import NavoptionList from '../data/NavoptionList';
import Navoption from './Navoption';
function SideBar({ DarkMode, setDarkMode }) {
    const [navData, setNavData] = useState(NavoptionList); // keep this

    const toggleMode = () => {
        setDarkMode(!DarkMode); // use prop's setDarkMode
    };
    return (
        <>
        <div className={`TOP ${DarkMode ? 'dark' : 'light'}`}>
                <a href='#' className='logo'>
                    <i className="bi bi-dpad"></i>
                    <span className='logoName'>Arena
                    </span>

                </a>
                <a href='#' className='RightTop' onClick={toggleMode}>
                    <i className={`bi ${DarkMode ? 'bi-sun-fill' : 'bi-moon-fill'}`}></i>
                    <span className='logoName'>User
                    </span>

                </a>
                
            </div>
        <div className={`sidebar ${DarkMode ? 'dark' : 'light'}`}>
            
            <ul className='option'>

                {
                    navData.map(item => (
                        <Navoption key={item._id} item={item}></Navoption>
                    ))
                }


            </ul>
            <li className='Contact'><a href='#'> <i class="bi bi-file-person-fill"></i><span className='nameName'>Contact</span></a></li>

        </div>
        </>
    )
}

export default SideBar
