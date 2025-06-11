import React, { useState, useEffect } from 'react';
import './Main.css';
import SideBar from '../components/SideBar';
import Home from './Home';
import TopBanner from './TopBanner';
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

  //creating a fetch component to store the api data
  const [games, setGames] = useState([]);//using array to store the data 
  const fetchdata = () => {
    fetch(`${process.env.PUBLIC_URL}/gameData.json`)
      .then(res => {
        if (!res.ok) {
          throw new Error("Failed to fetch game data");
        }
        return res.json();
      })
      .then(data => {
        setGames(data);
      })
      .catch(e => console.log("Error:", e.message));
  };

  useEffect(() => {
    fetchdata()
  }, []);
  return (
    <div className={`sidebar ${DarkMode ? 'dark' : 'light'} ${hide ? 'collapsed' : ''}`}>

      <main>
        <SideBar DarkMode={DarkMode} setDarkMode={toggleMode} hide={hide} sethide={filterMode} />
        <div className='Banner'>
          <TopBanner DarkMode={DarkMode} setDarkMode={toggleMode} hide={hide} sethide={filterMode} ></TopBanner>
          <div className="container-fluid">
              <Home games={games} DarkMode={DarkMode}></Home>
          
          </div>
          
        </div>

      </main>
    </div>
  );
}

export default Main;
