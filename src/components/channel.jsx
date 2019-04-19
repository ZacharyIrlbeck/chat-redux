import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectChannel } from '../actions';

const channel = (props) => {
  const handleClick = (event) => {
    props.selectChannel(props.channel);
  };

  return (
    <div>
      <p onClick={handleClick}>{props.channel}</p>
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectChannel }, dispatch);
}

export default connect(null, mapDispatchToProps)(channel);
