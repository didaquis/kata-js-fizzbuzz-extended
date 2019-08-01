const fizzBuzzExtended = require('../FizzBuzzExtended.js');

describe('FizzBuzzExtended: ', () => {

	it('Must be defined', () => {
		expect(fizzBuzzExtended).toBeDefined();
	});

	it('Should be a function', () => {
		expect(fizzBuzzExtended).toEqual(jasmine.any(Function));
	});

	it('Normal Numbers Return Same Number', () => {
		const numbers = [1, 2, 4];
		numbers.forEach((n) => {
			expect(fizzBuzzExtended(n)).toBe(n);
		});
	});

	it('Multiples of Three Return Fizz', () => {
		const numbers = [-3, 3, 6, 9, 12, 24, 123];
		numbers.forEach((n) => {
			expect(fizzBuzzExtended(n)).toBe('Fizz');
		});
	});

	it('Multiples of Five Return Buzz', () => {
		const numbers = [-5, 5, 10, 20, 50, 200];
		numbers.forEach((n) => {
			expect(fizzBuzzExtended(n)).toBe('Buzz');
		});
	});

	it('Multiples of Three and Five Return FizzBuzz', () => {
		const numbers = [-15, 15, 30, 45];
		numbers.forEach((n) => {
			expect(fizzBuzzExtended(n)).toBe('FizzBuzz');
		});
	});

	it('Multiples of Seven Return Pop', () => {
		const numbers = [-7, 7, 14, 28, 77];
		numbers.forEach((n) => {
			expect(fizzBuzzExtended(n)).toBe('Pop');
		});
	});
	
	it('Multiples of Three and Seven Return FizzPop', () => {
		const numbers = [-21, 21, 63, 126];
		numbers.forEach((n) => {
			expect(fizzBuzzExtended(n)).toBe('FizzPop');
		});
	});

	it('Multiples of Five and Seven Return BuzzPop', () => {
		const numbers = [-35, 35, 70, 140];
		numbers.forEach((n) => {
			expect(fizzBuzzExtended(n)).toBe('BuzzPop');
		});
	});

	it('Multiples of Three, Five and Seven Return FizzBuzzPop', () => {
		const numbers = [-105, 105, 210, 315];
		numbers.forEach((n) => {
			expect(fizzBuzzExtended(n)).toBe('FizzBuzzPop');
		});
	});
});
