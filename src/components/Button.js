/* eslint-disable react/button-has-type */
/* eslint-disable indent, no-tabs, no-mixed-spaces-and-tabs */

import React from 'react';
import PropTypes from 'prop-types';

function Button({ name, color, wide, clickHandler }) {
	const handleClick = () => {
    clickHandler(name);
  };
	
  return (
    <button
      type="button"
      className={wide ? 'col-md-6' : 'col-md-3'}
      style={{ backgroundColor: color === '#fe8e05' ? '#fe8e05' : '#EEE' }}
			onClick={handleClick}
    >
      {name}
    </button>
  );
}

Button.propTypes = {
    name: PropTypes.string.isRequired,
  	color: PropTypes.string,
		wide: PropTypes.bool,
		clickHandler: PropTypes.func,
  };

export default Button;
