"use strict";
function updateLight(current) {
	let arr = ["green", "yellow", "red"];
	let a;
	arr.forEach((elem, i, arr) => {
		if (current === elem) {
			console.log(arr[i + 1] || "green");
			a = arr[i + 1] || "green";
			return a;
		}
	});
	return a;
}
