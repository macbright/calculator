import React from 'react'

const Button = ({props}) => {

	return(
		<button className= {props.name === '0' ? 'col-md-6': 'col-md-3'} style=
		{{ backgroundColor: props.bg ? '#fe8e05': '#EEE' }}

		>{props.name}</button>
	);
	
}

export default Button;