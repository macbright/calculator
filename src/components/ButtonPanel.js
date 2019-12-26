import React from 'react'
import Button from './Button'

class ButtonPanel extends React.Component{
	constructor(props) {
		super(props)
	}

	render() {
		return(
			<div className='buttonPanel'>
				<div className="row group1">
					<Button name={'AC'} />  
					<Button name={'+/-'} /> 
					<Button name={'%'} /> 
					<Button name={'/'}  bg={true}/> 
				</div>
				<div className="row group2">
					<Button name={'7'} />  
					<Button name={'8'} /> 
					<Button name={'9'} /> 
					<Button name={'X'}  bg={true}/> 
				</div>
				<div className="row group3">
					<Button name={'4'} />  
					<Button name={'5'} /> 
					<Button name={'6'} /> 
					<Button name={'-'} bg={true}/> 
				</div>
				<div className="row group4">
					<Button name={'1'} />  
					<Button name={'2'} /> 
					<Button name={'3'} /> 
					<Button name={'+'} bg={true}/> 
				</div>
				<div className="row group5">
					<Button name={'0'} />  
					<Button name={'.'} /> 
					<Button name={'='} bg={true}/>  
				</div>
			</div>
		)
	}
}

export default ButtonPanel;