"use strict";
function add(num1, num2) {
	num1 = num1.toString().split("").reverse();
	num2 = num2.toString().split("").reverse();
	let max = Math.max(num1.length, num2.length);
	let str = [];
	for (let i = 0; i < max; i++) {
		str.push((+num1[i] || 0) + (+num2[i] || 0));
	}
	num1 = str.reverse().join("");
	return +num1;
}
