import React, { useState } from 'react';

const Login = ({ setIsLoggedIn }) => {
  const [sender, setSender] = useState('');
  const onLogin = () => {
    if (sender) {
      localStorage.setItem('sender', sender);
      setIsLoggedIn(true);
    } else {
      alert('Please enter your name!');
    }
  };
  return (
    <div className='login-form'>
      <div>
        <input
          type='text'
          placeholder='Write your name...'
          value={sender}
          onChange={(e) => setSender(e?.target?.value)}
          onKeyPress={(e) => {
            if (e?.key === 'Enter') {
              onLogin();
            }
          }}
        />
        <button className='login-btn' onClick={onLogin}>
          LOGIN
        </button>
      </div>
    </div>
  );
};

export default Login;
