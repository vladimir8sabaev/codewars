"use strict";
function dataReverse(data) {
	let size = 8; //размер подмассива
	let subarray = []; //массив в который будет выведен результат.
	for (let i = 0; i < Math.ceil(data.length / size); i++) {
		subarray[i] = data.slice(i * size, i * size + size);
	}
	console.log(subarray);
	console.log(subarray.length);

	if (subarray.length % 2 === 0) {
		for (let i = 1; i <= subarray.length / 2; i++) {
			[
				subarray[subarray.length / 2 - i],
				subarray[subarray.length / 2 + i - 1],
			] = [
				subarray[subarray.length / 2 + i - 1],
				subarray[subarray.length / 2 - i],
			];
		}
		return subarray.flat(Infinity);
	} else {
		for (let i = 1; i <= subarray.length / 2; i++) {
			[
				subarray[(subarray.length - 1) / 2 - i],
				subarray[(subarray.length - 1) / 2 + i],
			] = [
				subarray[(subarray.length - 1) / 2 + i],
				subarray[(subarray.length - 1) / 2 - i],
			];
		}
		return subarray.flat(Infinity);
	}
}
