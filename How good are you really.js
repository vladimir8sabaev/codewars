"use strict";
function betterThanAverage(classPoints, yourPoints) {
	let sum = 0;
	classPoints.forEach((item) => {
		sum += item;
	});
	return sum / Object.keys(classPoints).length < yourPoints;
}
