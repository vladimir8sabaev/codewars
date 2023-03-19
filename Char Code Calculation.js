"use strict";
function calc(x) {
	let total1 = x
		.split("")
		.map((item) => item.charCodeAt())
		.join("");
	let total2 = total1.replace(/7/g, 1);
	total1 = total1.split("").reduce((acc, value) => acc + +value, 0);
	total2 = total2.split("").reduce((acc, value) => acc + +value, 0);
	return total1 - total2;
}
calc("ifkhchlhfd");
