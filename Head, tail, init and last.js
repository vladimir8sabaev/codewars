"use strict";
function head(arr) {
	return arr[0];
}
function last(arr) {
	return arr[arr.length - 1];
}
function init(arr) {
	return arr.slice(0, arr.length - 1);
}
function tail(arr) {
	return arr.slice(1, arr.length);
}
console.log(tail([13, 48, 45, 46]));
