"use strict";
function sumMix(x) {
	let count = 0;
	x.forEach(function (elem) {
		count += parseInt(elem);
	});
	console.log(count);
	return count;
}
