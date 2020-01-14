/* eslint-disable react/destructuring-assignment */

import React from 'react';
import PropTypes from 'prop-types';

function Display({ result }) {
  return (
    <div className="display">
      {' '}
      {result || '0'}
      {' '}
    </div>
  );
}

Display.propTypes = {
    result: PropTypes.string,
  };

export default Display;
