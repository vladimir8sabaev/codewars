"use strict";
function findMissing(arr1, arr2) {
	for (let j = 0; j < arr2.length; j++) {
		arr1.forEach((item, i) => {
			if (item === arr2[j]) {
				arr1.splice(i, 1);
			}
		});
	}
	if (arr1.length === 0) {
		return 0;
	}
	return arr1[0];
}
