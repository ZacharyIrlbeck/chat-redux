/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/self-closing-comp */
import React from 'react';


class MessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = event => this.setState({ value: event.target.value })

  handleSubmit = (event) => {
    console.log(this.state.value);
    event.preventDefault();
    
    // this.props.sendMessage(this.event.target.value);
    // here we need to get the action from redux for ajax submit
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

export default MessageForm;

// set the state of the message in component state, use js to update
// and handle input, use redux for submit - in middleware submit api
// post request in action

