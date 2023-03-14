"use strict";
function duplicateEncode(str) {
	return str
		.toLowerCase()
		.split("")
		.map((letter, i, arr) => {
			if (arr.indexOf(letter) == arr.lastIndexOf(letter)) {
				return "(";
			} else {
				return ")";
			}
		})
		.join("");
}
