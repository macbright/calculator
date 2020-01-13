import React from 'react';
import Button from './Button';
import PropTypes from 'prop-types';

function ButtonPanel({ clickHandler }) {
	const handleClick = buttonName => {
    clickHandler(buttonName);
	}
  return (
    <div className="buttonPanel">
      <div className="row group1">
        <Button name="AC" clickHandler={handleClick} />
        <Button name="+/-" clickHandler={handleClick} />
        <Button name="%" clickHandler={handleClick} />
        <Button name="/" color="#fe8e05" clickHandler={handleClick} />
      </div>
      <div className="row group2">
        <Button name="7" clickHandler={handleClick} />
        <Button name="8" clickHandler={handleClick} />
        <Button name="9" clickHandler={handleClick} />
        <Button name="X" color="#fe8e05" clickHandler={handleClick} />
      </div>
      <div className="row group3">
        <Button name="4" clickHandler={handleClick} />
        <Button name="5" clickHandler={handleClick} />
        <Button name="6" clickHandler={handleClick} />
        <Button name="-" color="#fe8e05" clickHandler={handleClick} />
      </div>
      <div className="row group4">
        <Button name="1" clickHandler={handleClick} />
        <Button name="2" clickHandler={handleClick} />
        <Button name="3" clickHandler={handleClick} />
        <Button name="+" color="#fe8e05" clickHandler={handleClick} />
      </div>
      <div className="row group5">
        <Button name="0" wide={true} clickHandler={handleClick} />
        <Button name="." clickHandler={handleClick} />
        <Button name="=" color="#fe8e05" clickHandler={handleClick} />
      </div>
    </div>
  );
}
ButtonPanel.propTypes = {
		clickHandler: PropTypes.func,
  };

export default ButtonPanel;
