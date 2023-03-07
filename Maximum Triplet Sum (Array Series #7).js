"use strict";
function maxTriSum(numbers) {
	numbers.sort((a, b) => b - a);
	let res = Array.from(new Set(numbers));
	return res[0] + res[1] + res[2];
}
