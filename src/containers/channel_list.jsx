/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { connect } from 'react-redux';
import Channel from '../components/channel';

class ChannelList extends React.Component {
  render() {
    return (
      <div>
        { this.props.channels.map(channel => <Channel channel={channel} key={channel} />)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    channels: state.channels
  };
}

export default connect(mapStateToProps)(ChannelList);
 