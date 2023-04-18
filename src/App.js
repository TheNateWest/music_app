import React, { useState } from 'react';
import './App.css';
import Header from "./components/Header";
import SignIn from "./components/SignIn";
import OnlineMode from "./components/OnlineMode";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOnline, setIsOnline] = React.useState(false);


  return (
    <div className="App">
        <Header />
        {isLoggedIn ? (
          <>
          <p>You are logged in</p>
        <OnlineMode isOnline={isOnline} setIsOnline={setIsOnline}/>

        <h3>System Notifications</h3>
        {!isOnline && 
          <p>Your application is online. You won't be able to share or stream music to other devices.</p>}
        </>
      

      ): (<SignIn setIsLoggedIn={setIsLoggedIn}/>

      )}
      
    </div>
  );
}

export default App;
