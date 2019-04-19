import React from 'react';

const message = (props) => {
  return (
    <div>
      <strong>{props.message.content}</strong>
      <p>{props.message.author}</p>
    </div>
  );
};

export default message;