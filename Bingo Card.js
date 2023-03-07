"use strict";
function getCard() {
	function createArr(letter, low, high) {
		const arr = [];
		while (arr.length < 5) {
			let numba = Math.floor(low + (high - low) * Math.random());
			if (arr.indexOf(letter + numba) === -1) {
				arr.push(letter + numba);
			}
		}
		if (letter === "N") {
			arr.splice(2, 1);
		}
		return arr;
	}
	return createArr("B", 1, 15).concat(
		createArr("I", 16, 30),
		createArr("N", 31, 45),
		createArr("G", 46, 60),
		createArr("O", 61, 75)
	);
}
