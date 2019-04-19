/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { sendMessage } from '../actions';


class MessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = event => this.setState({ value: event.target.value })

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('in the form', this.props, this.props.selectedChannel, this.props.currentUser, this.state.value);
    this.props.sendMessage(this.props.selectedChannel, this.props.currentUser, this.state.value);
    // channel author message
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Message:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ sendMessage }, dispatch);
}

function mapStateToProps(state) {
  return {
    selectedChannel: state.selectedChannel,
    currentUser: state.currentUser
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);

// set the state of the message in component state, use js to update
// and handle input, use redux for submit - in middleware submit api
// post request in action

