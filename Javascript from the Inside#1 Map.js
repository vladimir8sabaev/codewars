"use strict";
Array.prototype.map = function (func, obj) {
	const newArr = this.slice();
	this.forEach((item, i, arr) => (newArr[i] = func.apply(obj, [item, i, arr])));
	return newArr;
};
