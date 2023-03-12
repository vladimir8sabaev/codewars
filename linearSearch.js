"use strict";
const arr = [1, 5, 4, 8, 5, 1, 2, 7, 5, 2, 11];
let count = 0;
function linearSearch(arr, item) {
	for (let i = 0; i < arr.length; i++) {
		count++;
		if (arr[i] === item) {
			return i;
		}
	}
	return null;
}
console.log(linearSearch(arr, 11));
console.log("count=", count);
