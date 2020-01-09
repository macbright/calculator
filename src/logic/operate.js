var Big = require('big.js');

const operate = (numberOne, numberTwo, operation) => {
	const num1 = new Big(numberOne)
	const num2 = new Big(numberTwo)
	if(operation === '-'){
		return (num1.minus(num2)).toString();
	} else if (operation === '+'){
		return (num1.plus(num2)).toString();
	} else if (operation === 'X'){
		return (num1.times(num2)).toString();
	} else if (operation === '/'){
		return (num1.div(num2)).toString();
	} 
	throw Error(`Unknown operation '${operation}'`);

}

export default operate;