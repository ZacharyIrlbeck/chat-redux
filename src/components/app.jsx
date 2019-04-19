import React from 'react';
import MessageList from '../containers/message_list';
import MessageForm from '../containers/messageForm';
import ChannelList from '../containers/channel_list';

const App = () => {
  return (
    <div className="app">
      <ChannelList />
      <MessageList />
      <MessageForm />
    </div>
  );
};

export default App;
