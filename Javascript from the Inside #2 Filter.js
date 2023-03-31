"use strict";
Array.prototype.filter = function (fun, that) {
	const newArr = [];
	fun = fun.bind(that);
	let len = this.length;
	for (let i = 0; i < len; i++) {
		if (i in this) {
			if (fun(this[i], i, this)) {
				newArr.push(this[i]);
			}
		}
	}
	return newArr;
};
