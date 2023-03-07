"use strict";
function fakeBin(x) {
	return x
		.split("")
		.map(function (item) {
			return +item < 5 ? "0" : "1";
		})
		.join("");
}
