"use strict";
function sortByBit(arr) {
	arr.sort((a, b) => a - b);
	let binary = arr.map((item) => item.toString(2));
	console.log(arr);
	binary.forEach((item, i) => {
		binary[i] = binary[i].match(/[1]/g) ? binary[i].match(/[1]/g).length : 0;
	});
	console.log(binary);
	for (let i = 0; i < binary.length; i++) {
		for (let j = 0; j < binary.length; j++) {
			if (binary[j] > binary[j + 1]) {
				[binary[j], binary[j + 1]] = [binary[j + 1], binary[j]];
				[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
			}
		}
	}
	return arr;
}
//?Решение топ чела
//? const sortByBit = arr => arr.sort((a, b) => a.toString(2).replace(/0/g, '') - b.toString(2).replace(/0/g, '') || a - b)
