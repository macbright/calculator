/* eslint-disable react/button-has-type */

import React from 'react';
import PropTypes from 'prop-types';

function Button({ name, bg }) {
  Button.propTypes = {
    name: PropTypes.string.isRequired,
    bg: PropTypes.string.isRequired,
  };

  return (
    <button
      type="button"
      className={name === '0' ? 'col-md-6' : 'col-md-3'}
      style={{ backgroundColor: bg ? '#fe8e05' : '#EEE' }}
    >
      {name}
    </button>
  );
}

export default Button;
