const FizzBuzzExtended = require('../../FizzBuzzExtended.js');
const fizzbuzzExtendedInstance = new FizzBuzzExtended;

describe('FizzBuzzExtended', () => {
	it('Normal Numbers Return Same Number', () => {
		expect(fizzbuzzExtendedInstance.test(2)).toBe(2);
	});

	it('Multiples of Three Return Fizz', () => {
		expect(fizzbuzzExtendedInstance.test(3)).toBe('Fizz');
		expect(fizzbuzzExtendedInstance.test(6)).toBe('Fizz');
		expect(fizzbuzzExtendedInstance.test(9)).toBe('Fizz');
		expect(fizzbuzzExtendedInstance.test(12)).toBe('Fizz');
		expect(fizzbuzzExtendedInstance.test(24)).toBe('Fizz');
	});

	it('Multiples of Five Return Buzz', () => {
		expect(fizzbuzzExtendedInstance.test(5)).toBe('Buzz');
		expect(fizzbuzzExtendedInstance.test(10)).toBe('Buzz');
		expect(fizzbuzzExtendedInstance.test(20)).toBe('Buzz');
		expect(fizzbuzzExtendedInstance.test(50)).toBe('Buzz');
	});

	it('Multiples of Three and Five Return Fizz Buzz', () => {
		expect(fizzbuzzExtendedInstance.test(15)).toBe('FizzBuzz');
		expect(fizzbuzzExtendedInstance.test(30)).toBe('FizzBuzz');
		expect(fizzbuzzExtendedInstance.test(45)).toBe('FizzBuzz');
	});

	it('Multiples of Seven Return Pop', () => {
		expect(fizzbuzzExtendedInstance.test(7)).toBe('Pop');
		expect(fizzbuzzExtendedInstance.test(14)).toBe('Pop');
	});
	
	it('Multiples of Three and Seven Return Fizz Pop', () => {
		expect(fizzbuzzExtendedInstance.test(21)).toBe('FizzPop');
	});

});
