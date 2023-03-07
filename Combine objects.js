"use strict";
function combine(...objS) {
	const newObj = {};
	for (let obj of objS) {
		for (let key in obj) {
			if (newObj[key]) {
				newObj[key] += obj[key];
			} else {
				newObj[key] = obj[key];
			}
		}
	}
	console.log(newObj);
	return newObj;
}
