"use strict";
function countSheeps(arrayOfSheep) {
	arrayOfSheep = arrayOfSheep.filter(function (item) {
		return item === true;
	});
	console.log(arrayOfSheep.length);
	return arrayOfSheep.length;
}
