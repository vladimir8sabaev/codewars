"use strict";
function doubleChar(str) {
	let newStr;
	return (
		// split the string into individual char array
		str
			.split("")
			.map(function (v) {
				// iterate and update
				return v + v;
				// join the updated array
			})
			.join("")
	);
}
