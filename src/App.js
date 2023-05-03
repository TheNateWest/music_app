import React, { useState } from 'react';
import './App.css';
import Header from "./components/Header";
import SignIn from "./components/SignIn";
import OnlineMode from "./components/OnlineMode";
import Volume from "./components/Volume";
import Quality from "./components/Quality";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOnline, setIsOnline] = React.useState(true);
  const [volume, setVolume] = useState(30);
  const [quality, setQuality] = useState(2);

  return (
    <div className="App">
        <Header />
        {isLoggedIn ? (
          <>
          <p>You are logged in</p>
          <div style={{display: "flex"}}>

          
        <OnlineMode isOnline={isOnline} setIsOnline={setIsOnline}/>
        <Volume volume={volume} setVolume={setVolume}/>
        <Quality quality={quality} setQuality={setQuality}/>
        </div>
        <h3>System Notifications</h3>
        {!isOnline && 
          <p>Your application is offline. You won't be able to share or stream music to other devices.</p>}
        {volume >= 80 && (
          <p>Listening to music at a high volume could cause long-term hearing loss.</p>
        )}
        {quality == 1 && (
          <p>Music quality is degraded. Increase quality if your connection allows it.</p>
        )}

        </>
      

      ): (<SignIn setIsLoggedIn={setIsLoggedIn}/>

      )}
      
    </div>
  );
}

export default App;
