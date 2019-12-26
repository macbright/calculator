import operate from './operate'

const calculate = (calculatorData, buttonName) => {
	let {total, next, operation} = calculatorData;
	if(buttonName === '+/-'){
		if(total){
			return total *= -1;
		} else{
			return next  *= -1;
		}
	} else {
		operate(total, next, operation)
	}
}

export default calculate;