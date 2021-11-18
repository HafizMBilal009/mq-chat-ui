import { useEffect, useState } from 'react';
import Home from './Home';
import Login from './Login';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    if (localStorage.getItem('sender')) {
      setIsLoggedIn(true);
    }
  }, []);
  return (
    <div className='App'>
      {isLoggedIn && localStorage.getItem('sender') ? (
        <Home setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <div className='login-container'>
          <Login setIsLoggedIn={setIsLoggedIn} />
        </div>
      )}
    </div>
  );
};

export default App;
