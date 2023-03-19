"use strict";
function accum(s) {
	let arr = [];
	s.split("").forEach((letter, i) => {
		arr[i] = letter.toUpperCase() + letter.toLowerCase().repeat(i);
	});
	return arr.join("-");
}
accum("RqaEzty");
