"use strict";
function squareSum(numbers) {
	if (numbers.length == 0) {
		return 0;
	} else {
		let y = numbers.map((item) => item ** 2);
		return y.reduce((a, b) => a + b);
	}
}
