"use strict";
function sentence(list) {
	let obj = {};
	list.forEach((item) => {
		Object.assign(obj, item);
	});
	let index = list.map((item) => +Object.keys(item)).sort((a, b) => a - b);
	let str = "";
	index.forEach((index) => {
		list.forEach((item) => {
			if (index == Object.keys(item)) {
				str += ` ${Object.values(item)}`;
			}
		});
	});
	return str.trim();
}
