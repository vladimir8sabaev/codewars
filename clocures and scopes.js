"use strict";
function createFunctions(n) {
	let functions = [];
	for (let i = 0; i < n; i++) {
		functions.push(function () {
			return i;
		});
	}
	return functions;
}
let functions = createFunctions(5);
console.log(functions[0]());
console.log(functions[1]());
console.log(functions[2]());
console.log(functions[3]());
console.log(functions[4]());
