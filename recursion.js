"use strict";
const factorial = (n) => {
	if (n === 1) {
		return 1;
	}
	return n * factorial(n - 1);
};
console.log(factorial(5));

const fib = (n) => {
	if (n === 1 || n === 2) {
		return 1;
	}
	return fib(n - 1) + fib(n - 2);
};
console.log(fib(8));
