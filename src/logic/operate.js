var Big = require('big.js');

const operate = (numberOne, numberTwo, operation) => {
	const num1 = new Big(numberOne)
	const num2 = new Big(numberTwo)
	if(operation === '-'){
		return num1 - num2;
	} else if (operation === '+'){
		return num1 + num2;
	} else if (operation === 'X'){
		return num1 * num2;
	} else if (operation === '/'){
		return num1 / num2;
	} else if (operation === '%'){
		return num1 % num2
	}

}

export default operate;