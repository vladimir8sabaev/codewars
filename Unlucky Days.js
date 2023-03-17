"use strict";
function unluckyDays(year) {
	let count = 0;
	for (let i = 0; i <= 11; i++) {
		if (new Date(year, i, 13).getDay() == 5) {
			count++;
			console.log(new Date(year, i, 14));
		}
	}
	return count;
}
unluckyDays(1001);
