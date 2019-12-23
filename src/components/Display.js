import React from 'react';

class Display extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<div className='display'> {this.props.result || 0} </div>
		)
	}
}

export default Display;