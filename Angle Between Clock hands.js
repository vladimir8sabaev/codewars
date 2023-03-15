"use strict";
function makeDate(hours, minutes) {
	const date = new Date();
	date.setMinutes(minutes);
	date.setHours(hours);
	return date;
}

function handAngle(date) {
	let hours = date.getHours();
	let minutes = date.getMinutes();
	let degrees = Math.min(
		Math.abs(hours * 30 + minutes * 0.5 - minutes * 6),
		360 - Math.abs(hours * 30 + minutes * 0.5 - minutes * 6)
	);
	let rads = (degrees * Math.PI) / 180;
	return rads;
}
