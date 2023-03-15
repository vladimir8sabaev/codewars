"use strict";
function numberOfPairs(gloves) {
	let arr = structuredClone(gloves);
	let counter = 0;
	arr.sort();
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] == arr[i + 1]) {
			counter++;
			arr.splice(i, 2);
			i -= 1;
		}
	}
	return counter;
}
