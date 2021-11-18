import React from 'react';

const Message = ({ index, message, sender, time }) => {
  return (
    <div
      key={index}
      className={`message ${
        sender === localStorage.getItem('sender') ? 'my-messages' : ''
      }`}
    >
      <div className='message-info'>
        <div className='message-sender'>
          {sender === localStorage.getItem('sender') ? '' : sender}
        </div>
        <div className='message-text'>{message}</div>
        <div className='message-time'>{time}</div>
      </div>
    </div>
  );
};

export default Message;
