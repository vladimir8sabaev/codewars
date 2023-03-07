"use strict";
function highAndLow(array) {
	array = array.split(" ").sort((a, b) => b - a);
	return array[0] + " " + array[array.length - 1];
}
