import React, { useState } from 'react'
import './SideBar.css'
import NavoptionList from '../data/NavoptionList';
import Navoption from './Navoption';
function SideBar({ DarkMode, hide }) {
    const [navData, setNavData] = useState(NavoptionList); // keep this
    const hancleNavOnclick = (id) => {
        console.log(id)
        const newNavData = navData.map(nav => {
            nav.active = false;
            if (nav._id == id) {//if nav id matched to the id of what we have clicked make it active
                nav.active = true;
            }
            return nav
        })
        setNavData(newNavData);

    }
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
                            .map(item => <Navoption key={item._id} item={item} navOnClick={hancleNavOnclick}/>)
                    }
                </ul>

                <ul className='Contact' >
                    {
                        navData.filter(item => item.name === 'Contact')
                            .map(item => <Navoption key={item._id} item={item} navOnClick={hancleNavOnclick}/>)
                    }
                </ul>




            </div>
        </>
    )
}

export default SideBar
