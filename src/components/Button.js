/* eslint-disable react/button-has-type */

import React from 'react';
import PropTypes from 'prop-types';

function Button({ name, color, wide }) {
  Button.propTypes = {
    name: PropTypes.string.isRequired,
    bg: PropTypes.string.isRequired,
  };

  return (
    <button
      type="button"
      className={wide ? 'col-md-6' : 'col-md-3'}
      style={{ backgroundColor: color ? '#fe8e05' : '#EEE' }}
    >
      {name}
    </button>
  );
}

export default Button;
