"use strict";
function getLengthOfMissingArray(arrayOfArrays) {
	arrayOfArrays = (arrayOfArrays || [])
		.map((a) => (a ? a.length : 0))
		.sort((a, b) => a - b);

	if (arrayOfArrays.includes(0)) {
		return 0;
	}

	for (let i = 1; i < arrayOfArrays.length; i++) {
		if (arrayOfArrays[i] - arrayOfArrays[i - 1] !== 1) {
			return arrayOfArrays[i - 1] + 1;
		}
	}

	return 0;
}
