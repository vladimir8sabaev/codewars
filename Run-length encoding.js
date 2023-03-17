"use strict";
let str = "hello world!";
var runLengthEncoding = function (str) {
	const arr = str.split("").map((item) => [1, item]);
	console.log("arr:", arr);
	for (let i = 0; i < arr.length - 1; i++) {
		if (arr[i][1] == arr[i + 1][1]) {
			console.log(i, "here");
			arr[i][0] += 1;
			arr.splice(i + 1, 1);
			i -= 1;
		}
	}
	return arr;
};
