"use strict";
const decimal = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

function numberToHex(number) {
	let res = "";
	if (number <= 0) {
		res += "00";
		return res;
	}
	if (number > 255) {
		res += "FF";
		return res;
	}
	while (number >= 1) {
		decimal.forEach((item, i) => {
			if (number % 16 === item) {
				res += hex[i];
				number = Math.floor(number / 16);
			}
		});
	}
	if (res.length < 2) {
		res += "0";
	}
	return res.split("").reverse().join("");
}
function rgb(r, g, b) {
	return numberToHex(r) + numberToHex(g) + numberToHex(b);
}
