/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import Message from '../components/message';
import { fetchMessages } from '../actions';

class MessageList extends React.Component {
  componentWillMount() {
    this.props.fetchMessages(this.props.selectedChannel, 2000);
  }

  componentDidMount() {
    this.interval = setInterval(this.MessageFetch.bind(this), 5000);
  }

  componentWillUnmount() {
    clearInterval(this.Interval);
  }

  MessageFetch() {
    this.props.fetchMessages(this.props.selectedChannel);
  }

  render() {
    console.log("lets make it display!", this.props.messages);
    return (
      <div>
        {this.props.messages.length > 0 ? (
          this.props.messages.map(message => <Message message={message} key={message.created_at} />)
        ) : (
          <p>Fuck you</p>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages,
    selectedChannel: state.selectedChannel
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchMessages },
    dispatch
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
