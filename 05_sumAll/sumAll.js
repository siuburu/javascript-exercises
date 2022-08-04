const sumAll = function (firstNumber, secondNumber) {
	let sum = 0;
	let menor = 0;
	let maior = 0;

	if (
		firstNumber < 0 ||
		secondNumber < 0 ||
		typeof secondNumber != "number" ||
		typeof firstNumber != "number"
	)
		return "ERROR";
	if (secondNumber > firstNumber) {
		menor = firstNumber;
		maior = secondNumber;
	} else {
		menor = secondNumber;
		maior = firstNumber;
	}
	for (; menor <= maior; menor++) {
		sum += menor;
	}
	return sum;
};

// Do not edit below this line
module.exports = sumAll;
