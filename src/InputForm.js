import axios from 'axios';
import React, { useState } from 'react';

const InputForm = () => {
  const [message, setMessage] = useState('');
  const sendMessage = async () => {
    if (message) {
      await axios.request({
        url: 'http://localhost:5000/message',
        method: 'POST',
        data: { sender: localStorage.getItem('sender'), message },
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setMessage('');
    }
  };

  return (
    <div className='message-input-container'>
      <input
        type='text'
        value={message}
        placeholder='Write a message...'
        onChange={(e) => setMessage(e?.target?.value)}
        onKeyPress={(e) => {
          if (e?.key === 'Enter') {
            sendMessage();
          }
        }}
      />

      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default InputForm;
