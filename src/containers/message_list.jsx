/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import Message from '../components/message';
import { fetchMessages } from '../actions';

class MessageList extends React.Component {
  componentWillMount() {
    this.props.fetchMessages(this.props.selectedChannel);
  }

  render() {

    return (
      <div>
        {this.props.messages.length > 0 ? (
          this.props.messages.map(message => <Message message={message} key={message.created_at} />)
        ) : (
          <p>Nothing to display</p>
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
