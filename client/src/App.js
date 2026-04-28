import React, { useEffect, useState } from 'react';
import Auth from './components/Auth';
import Game from './components/Game';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const savedUser = localStorage.getItem('user');
    if (token && savedUser) {
      setIsLoggedIn(true);
      setUser(JSON.parse(savedUser));
    }
  }, []);

  return (
    <div className="App">
      {isLoggedIn ? (
        <Game />
      ) : (
        <Auth onLoginSuccess={(userData) => {
          setUser(userData);
          setIsLoggedIn(true);
        }} />
      )}
    </div>
  );
}

export default App;
