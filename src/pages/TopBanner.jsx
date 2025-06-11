import React from 'react'
import './TopBanner.css'
function TopBanner({ DarkMode, setDarkMode, hide, sethide }) {
    return (
        <header className={`header ${DarkMode ? 'dark' : 'light'}`}>
            
                <a href='#' className='filtericon' onClick={sethide}>
                    <i className={`bi ${hide ? 'bi-toggle2-on' : 'bi-toggle2-off'}`}></i>

                </a>

                <div className='user'>
                    <a href='#' className='modeicon' onClick={setDarkMode}>
                        <i className={`bi ${DarkMode ? 'bi-sun-fill' : 'bi-moon-fill'}`}></i>

                    </a>
                    <a href='' className='icon'><i class="bi bi-person">
                        <span className='profilename'> Profile </span>
                    </i></a>
                </div>
        </header>
    )
}

export default TopBanner
