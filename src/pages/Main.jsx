import React, { useState } from 'react';
import './Main.css';
import SideBar from '../components/SideBar';

function Main() {
  const [DarkMode, setDarkMode] = useState(true);
  const [hide, sethide] = useState(false);

  return (
    <div className={`sidebar ${DarkMode ? 'dark' : 'light'} ${hide ? 'collapsed' : ''}`}>
      <main>
        <SideBar DarkMode={DarkMode} setDarkMode={setDarkMode} hide={hide} sethide={sethide}/>
        <div className='Banner' hide={hide} sethide={sethide}></div>
      </main>
    </div>
  );
}

export default Main;
