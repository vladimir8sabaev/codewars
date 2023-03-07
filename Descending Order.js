"use strict";
function descendingOrder(n) {
	let arr = +Array.from(String(n), Number)
		.sort((a, b) => b - a)
		.join("");
	return arr;
}
