import React from 'react';

const Message = ({ index, message, sender, time }) => {
  const isMe = sender === localStorage.getItem('sender');
  return (
    <div
      key={index}
      className={`${isMe ? 'mine messages' : 'yours messages alg-end'}`}
    >
      {!isMe && <div className='sender'>{sender?.split(' ')?.[0]}</div>}
      <div className='message last'>{message}</div>
    </div>
  );
};

export default Message;
