"use strict";
const obj = { Java: 10, Ruby: 80, Python: 65 };
function myLanguages(results) {
	return Object.entries(results)
		.filter((item) => item[1] >= 60)
		.sort((a, b) => b[1] - a[1])
		.map((item) => item[0]);
}
myLanguages(obj);
