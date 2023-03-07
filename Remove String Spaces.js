"use strict";
function noSpace(x) {
	return x
		.split("")
		.filter((item) => item !== " ")
		.join("");
}
