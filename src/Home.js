import React from 'react';
import InputForm from './InputForm';
import Messages from './Messages';

const Home = ({ setIsLoggedIn }) => {
  const onLogout = () => {
    localStorage.removeItem('sender');
    setIsLoggedIn(false);
  };
  return (
    <div className='home'>
      <div className='header'>
        <p>
          Hello <b>{localStorage.getItem('sender')}</b>!
        </p>
        <span className='logout' onClick={onLogout}>
          Log out
        </span>
      </div>
      <Messages />
      <InputForm />
    </div>
  );
};

export default Home;
