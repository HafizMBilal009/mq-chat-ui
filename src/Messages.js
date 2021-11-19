import moment from 'moment';
import React, { useCallback, useEffect, useState } from 'react';
import Message from './Message';
import { socket } from './socket';
const Messages = () => {
  const [messages, setMessages] = useState([]);

  const getMessage = useCallback(
    ({ sender, message }) => {
      setMessages([
        ...messages,
        { sender, message, time: moment().format('hh:mm A') },
      ]);
      document
        .getElementById('all-messages')
        .scrollIntoView({ behavior: 'smooth', block: 'end' });
    },
    [messages]
  );
  useEffect(() => {
    socket.on('SEND_MESSAGE', getMessage);
    return () => socket.off('SEND_MESSAGE');
  }, [getMessage]);

  return messages?.length > 0 ? (
    <div>
      <div id='all-messages' className='chat'>
        {messages?.map(({ sender, message, time }, index) => (
          <Message
            index={index}
            sender={sender}
            message={message}
            time={time}
          />
        ))}
      </div>
    </div>
  ) : (
    <div className='not-found'>Start chatting with friends!</div>
  );
};

export default Messages;
