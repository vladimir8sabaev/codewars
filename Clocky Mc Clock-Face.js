"use strict";
var whatTimeIsIt = function (angle) {
	let hours = Math.floor(angle / 30);
	let minutes = Math.floor((angle % 30) * 2);
	if (minutes < 10) {
		minutes = `0${minutes}`;
	}
	if (angle < 30) {
		return `12:${minutes}`;
	}
	if (angle < 300) {
		return `0${hours}:${minutes}`;
	} else {
		return `${hours}:${minutes}`;
	}
};
