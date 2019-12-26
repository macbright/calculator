import React from 'react'

class Button extends React.Component {
	constructor(props){
		super(props)
	}
	render() {
		return(
	<button className= {this.props.name === '0' ? 'col-md-6': 'col-md-3'} style=
	{{ backgroundColor: this.props.bg ? '#fe8e05': '#EEE' }}
	
	>{this.props.name}</button>
		);
	}
}

export default Button;