const fizzBuzzExtended = require('../../FizzBuzzExtended.js');

describe('FizzBuzzExtended level one', () => {
	it('Normal Numbers Return Same Number', () => {
		expect(fizzBuzzExtended(1)).toBe(1);
		expect(fizzBuzzExtended(2)).toBe(2);
		expect(fizzBuzzExtended(4)).toBe(4);
	});

	it('Multiples of Three Return Fizz', () => {
		expect(fizzBuzzExtended(3)).toBe('Fizz');
		expect(fizzBuzzExtended(6)).toBe('Fizz');
		expect(fizzBuzzExtended(9)).toBe('Fizz');
		expect(fizzBuzzExtended(12)).toBe('Fizz');
		expect(fizzBuzzExtended(24)).toBe('Fizz');
		expect(fizzBuzzExtended(123)).toBe('Fizz');
	});

	it('Multiples of Five Return Buzz', () => {
		expect(fizzBuzzExtended(5)).toBe('Buzz');
		expect(fizzBuzzExtended(10)).toBe('Buzz');
		expect(fizzBuzzExtended(20)).toBe('Buzz');
		expect(fizzBuzzExtended(50)).toBe('Buzz');
		expect(fizzBuzzExtended(200)).toBe('Buzz');
	});

	it('Multiples of Three and Five Return Fizz Buzz', () => {
		expect(fizzBuzzExtended(15)).toBe('FizzBuzz');
		expect(fizzBuzzExtended(30)).toBe('FizzBuzz');
		expect(fizzBuzzExtended(45)).toBe('FizzBuzz');
	});
});


describe('FizzBuzzExtended level two', () => {
	it('Multiples of Seven Return Pop', () => {
		expect(fizzBuzzExtended(7)).toBe('Pop');
		expect(fizzBuzzExtended(14)).toBe('Pop');
		expect(fizzBuzzExtended(28)).toBe('Pop');
		expect(fizzBuzzExtended(77)).toBe('Pop');
	});
	
	it('Multiples of Three and Seven Return Fizz Pop', () => {
		expect(fizzBuzzExtended(21)).toBe('FizzPop');
		expect(fizzBuzzExtended(63)).toBe('FizzPop');
		expect(fizzBuzzExtended(126)).toBe('FizzPop');
	});

	it('Multiples of Five and Seven Return Buzz Pop', () => {
		expect(fizzBuzzExtended(35)).toBe('BuzzPop');
		expect(fizzBuzzExtended(70)).toBe('BuzzPop');
		expect(fizzBuzzExtended(140)).toBe('BuzzPop');
	});

	it('Multiples of Three, Five and Seven Return Fizz Buzz Pop', () => {
		expect(fizzBuzzExtended(105)).toBe('FizzBuzzPop');
		expect(fizzBuzzExtended(210)).toBe('FizzBuzzPop');
		expect(fizzBuzzExtended(315)).toBe('FizzBuzzPop');
	});
});
