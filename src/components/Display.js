import React from 'react';

const Display = ({props}) =>  {

	return (
		<div className='display'> {props.result || 0} </div>
	)
	
}

export default Display;