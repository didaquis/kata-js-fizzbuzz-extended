function fizzBuzzExtended(n) {
	let result = '';

	if (isMultipleOfThree(n)) {
		result += 'Fizz';
	}
	if (isMultipleOfFive(n)) {
		result += 'Buzz';
	}
	if (isMultipleOfSeven(n)) {
		result += 'Pop';
	}

	if(result.length) {
		return result;
	}
	return n;
}

function isMultipleOfThree(n) {
	return n % 3 === 0;
}

function isMultipleOfFive(n) {
	return n % 5 === 0;
}

function isMultipleOfSeven(n) {
	return n % 7 === 0;
}

module.exports = fizzBuzzExtended;
