/* eslint-disable react/prefer-stateless-function, no-unused-vars */

import React from 'react';
import '../App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			total: null,
			next: null,
			operation: null,
		}
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(buttonName){
		this.setState(calculate(this.state, buttonName))
	}
	render() {
		return (
			<div className="home">
				<h1> React Calculator </h1>
				<Display result = { this.state.next || this.state.total } /> 
				<ButtonPanel clickHandler = {this.handleClick} />
			</div>
		);
	}
}

export default App;
