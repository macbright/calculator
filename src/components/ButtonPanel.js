import React from 'react'

class ButtonPanel extends React.Component{
	constructor(props) {
		super(props)
	}

	render() {
		return(
			<div>
				<div className="row group1">
					<button className='col-md-3'> AC </button>
					<button className='col-md-3'> +/- </button>
					<button className='col-md-3'> % </button>
					<button className='col-md-3'> + </button>
				</div>
				<div className="row group2">
					<button className='col-md-3'> 7 </button>
					<button className='col-md-3'> 8 </button>
					<button className='col-md-3'> 9 </button>
					<button className='col-md-3'> X </button>
				</div>
				<div className="row group3">
					<button className='col-md-3'> 4 </button>
					<button className='col-md-3'> 5 </button>
					<button className='col-md-3'> 6 </button>
					<button className='col-md-3'> - </button>
				</div>
				<div className="row group4">
					<button className='col-md-3'> 1 </button>
					<button className='col-md-3'> 2 </button>
					<button className='col-md-3'> 3 </button>
					<button className='col-md-3'> + </button>
				</div>
				<div className="row group2">
					<button className='col-md-6'> 0 </button>
					<button className='col-md-3'> . </button>
					<button className='col-md-3'> = </button>
				</div>
			</div>
		)
	}
}

export default ButtonPanel;