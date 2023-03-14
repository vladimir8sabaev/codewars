"use strict";
function deepCount(arr) {
	let count = 0;
	arr.forEach((item) => {
		count++;
		if (Array.isArray(item)) {
			count += deepCount(item);
		}
	});
	return count;
}
