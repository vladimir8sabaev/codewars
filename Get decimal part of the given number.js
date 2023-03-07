"use strict";
function getDecimal(n) {
	n = Math.abs(n); // Change to positive
	var decimal = n - Math.floor(n);
	return decimal;
}
