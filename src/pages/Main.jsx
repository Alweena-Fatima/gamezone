import React, { useState } from 'react';
import './Main.css';
import SideBar from '../components/SideBar';

function Main() {
  const [DarkMode, setDarkMode] = useState(true);

  return (
    <div className={DarkMode ? 'dark' : 'light'}>
      <main>
        <SideBar DarkMode={DarkMode} setDarkMode={setDarkMode} />
        <div className='Banner'></div>
      </main>
    </div>
  );
}

export default Main;
