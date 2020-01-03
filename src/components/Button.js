/* eslint-disable react/button-has-type */
/* eslint-disable react/destructuring-assignment */

import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  Button.propTypes = {
    name: PropTypes.string.isRequired,
    bg: PropTypes.string.isRequired,
  };

  return (
    <button
      className={props.name === '0' ? 'col-md-6' : 'col-md-3'}
      style={{ backgroundColor: props.bg ? '#fe8e05' : '#EEE' }}
    >
      {props.name }
    </button>
  );
}

export default Button;
