"use strict";
function findOdd(arr) {
	for (let i = 0; i < arr.length; i++) {
		const count = arr.filter((value) => value === arr[i]).length;
		if (count % 2 == 1) {
			console.log(arr[i]);
			return arr[i];
		}
	}
}
