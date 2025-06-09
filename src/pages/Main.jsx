import React, { useState } from 'react';
import './Main.css';
import SideBar from '../components/SideBar';

function Main() {
  const [DarkMode, setDarkMode] = useState(true);// [current state , handlefunction]
  const [hide, sethide] = useState(false);

  const toggleMode = () => {
    setDarkMode(!DarkMode); // use prop's setDarkMode
  };
  const filterMode = () => {
    sethide(!hide); // use prop's toggle the filter mode 
  };
  //pass the current state of dark mode to chnage the icon and function to change the mode 
  //same for the toggle 
  //here in the banner we dont need to change any icon therefore no need to pass the current state of the filter

  return (
    <div className={`sidebar ${DarkMode ? 'dark' : 'light'} ${hide ? 'collapsed' : ''}`}>
      <main>

        <SideBar DarkMode={DarkMode} setDarkMode={toggleMode} hide={hide} sethide={filterMode} />

        <div className='Banner' sethide={sethide}></div>
      </main>
    </div>
  );
}

export default Main;
