import React, { useState } from 'react'
import './SideBar.css'
import NavoptionList from '../data/NavoptionList';
import Navoption from './Navoption';
function SideBar() {
    const [navData, setNavData] = useState(NavoptionList);// default : NavoptionList
    return (
        <div className='sidebar'>
            <div className='TOP'>
                <a href='#' className='logo'>
                    <i className="bi bi-dpad"></i>
                    <span className='logoName'>Arena
                    </span>

                </a>
                <a href='#' className='RightTop'>
                    <i class="bi bi-sunset-fill"></i>
                    <span className='logoName'>User
                    </span>

                </a>
                
            </div>
            <ul className='option'>

                {
                    navData.map(item => (
                        <Navoption key={item._id} item={item}></Navoption>
                    ))
                }


            </ul>
            <li className='Contact'><a href='#'> <i class="bi bi-file-person-fill"></i><span className='nameName'>Contact</span></a></li>

        </div>
    )
}

export default SideBar
