"use strict";
Function.prototype.bind = function (ctx) {
	const func = this;
	return function (...args) {
		return func.apply(func, args);
	};
};
