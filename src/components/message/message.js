import React from 'react';

import './message.style.css';

const Message = ({ children }) => {
  return <p className="message">{children}</p>;
};

export default Message;
