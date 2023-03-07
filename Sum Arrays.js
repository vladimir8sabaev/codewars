"use strict";
function sum(numbers) {
	"use strict";
	let sum = 0;
	Array.from(numbers).forEach((item) => {
		sum += item;
	});
	return sum;
}
