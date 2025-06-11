import React, { useState, useEffect, useRef } from 'react';
import './Main.css';
import SideBar from '../components/SideBar';
import Home from './Home';
import TopBanner from './TopBanner';
import Bag from './Bag'
import Genre from './Genre'
import Contact from './Contact'
import Wishlist from './Wishlist'

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
  //now how to chnage the page when we clisk on the different side bar option => use reference hook
  const homeRef = useRef();
  const genreRef = useRef();
  const cartRef = useRef();
  const likeRef = useRef();
  const contactRef = useRef();
  const sections = [
    {
      name: 'home',
      ref: homeRef,
      active: true,
    },
    {
      name: 'genre',
      ref: genreRef,
      active: false,
    },
    {
      name: 'cart',
      ref: cartRef,
      active: false,
    },
    {
      name: 'wishlist',
      ref: likeRef,
      active: false,
    },
    {
      name: 'contact',
      ref: contactRef,
      active: false,
    },
  ];
  //neeche ka function jab hun maano contact par click karenge wo phele se 
  //jish bhi section ke class name me active hai ussme se active hata dega aur contact 
  // section ke class name me active add kar dega
  const handleSectionActive = target => {
    sections.map(section => {
      section.ref.current.classList.remove('active')
      if (section.ref.current.id === target) {
        section.ref.current.classList.add('active');
      }
      return section;
    });
  };
  return (
    <div className={`sidebar ${DarkMode ? 'dark' : 'light'} ${hide ? 'collapsed' : ''}`}>

      <main>
        <SideBar DarkMode={DarkMode} setDarkMode={toggleMode} hide={hide} sethide={filterMode} sectionAvctive={handleSectionActive} />
        <div className='Banner'>
          <TopBanner DarkMode={DarkMode} setDarkMode={toggleMode} hide={hide} sethide={filterMode} ></TopBanner>
          <div className="container-fluid">
            <Home games={games} DarkMode={DarkMode} reference={homeRef}></Home>
            <Genre games={games} reference={genreRef}></Genre>
            <Bag games={games} reference={cartRef}></Bag>
            <Wishlist games={games} reference={likeRef}></Wishlist>
            <Contact reference={contactRef}></Contact>

          </div>

        </div>

      </main>
    </div>
  );
}

export default Main;
