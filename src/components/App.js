import React from 'react';
import '../App.css';
import Display from './Display'
import ButtonPanel from './ButtonPanel'

class App extends React.Component {
	render() {
		return (
			<div className="home">
				<h1> React Calculator </h1>
				<Display />
				<ButtonPanel />
				
			</div>
		);
	}
}

export default App;
