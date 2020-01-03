/* eslint-disable react/destructuring-assignment */

import React from 'react';
import PropTypes from 'prop-types';

function Display(props) {
  Display.propTypes = {
    result: PropTypes.string.isRequired,
  };
  return (
    <div className="display">
      {' '}
      {props.result || 0}
      {' '}
    </div>
  );
}

export default Display;
