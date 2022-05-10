import React, { useContext, useEffect, useState } from 'react'
import { Routes, Route, Link } from "react-router-dom";
import { homeState } from './Context';
import { helperState } from './Context';
import { searchState } from './Context';
import './App.css';
import './ComponentsStyle/Kevin.css'
import NavBottom from "./Components/NavBottom"
import TopHeader from './Components/TopHeader';
import Home from './Pages/Home';
import Helper from './Pages/Helper';
import Search from './Pages/Search';
import Results from './Pages/Results';
import Offers from './Pages/Offers';
import Reviews from './Pages/Reviews';

function App() {

  document.addEventListener('visibilitychange', function() {
    if (document.visibilityState !== 'visible') {
      vibrate()
    }

  });

  function vibrate() {
    Notification.requestPermission(function(result) {
      if (result === 'granted') {
        navigator.serviceWorker.ready.then(function(registration) {
          registration.showNotification('There are new offers', {
            body: 'Check out the new offers that match your results!',
            badge: './Images/192x192.png',
            vibrate: [200, 100, 200, 100, 200, 100, 200],
            tag: 'vibration-sample',
          });
        });
      }
    });
  }



  const [home, setHome] = useState(true);
  const [helper, setHelper] = useState(false);
  const [search, setSearch] = useState(false);
  return (
    <div className="App">
    <homeState.Provider value={{home, setHome}}> 
    <helperState.Provider value={{helper, setHelper}}> 
    <searchState.Provider value={{search, setSearch}}> 
      <TopHeader />
      <NavBottom />
    
      
      <div id='main'>
        <Routes >
          <Route path='/' element={<Home />} />
          <Route path='/helper' element={<Helper />} />
          <Route path='/search' element={<Search />} />
          <Route path='/results' element={<Results />} />
          <Route path='/offers' element={<Offers />} />
          <Route path='/reviews' element={<Reviews />} />
        </Routes>
      </div>
      </searchState.Provider>
      </helperState.Provider>
      </homeState.Provider>
    </div>
  );
}

export default App;
