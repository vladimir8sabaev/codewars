"use strict";
function formatDuration(seconds) {
	if (seconds == 0) {
		return "now";
	}
	let years = Math.floor(seconds / (3600 * 24 * 365));
	seconds = seconds - years * 3600 * 24 * 365;
	let days = Math.floor(seconds / (3600 * 24));
	seconds = seconds - days * 3600 * 24;
	let hours = Math.floor(seconds / 3600);
	seconds = seconds - hours * 3600;
	let minutes = Math.floor(seconds / 60);
	seconds = seconds - minutes * 60;
	let arr = [years, days, hours, minutes, seconds];
	let add = ["year", "day", "hour", "minute", "second"];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] == 0) {
			arr.splice(i, 1);
			add.splice(i, 1);
			i--;
		}
	}
	arr = arr.map((item, index) => {
		if (item == 1) {
			return (item += " " + add[index]);
		} else {
			return (item = item + " " + add[index] + "s");
		}
	});
	if (arr.length > 1) {
		arr[arr.length - 1] = "and " + arr[arr.length - 1];
	}
	let last = arr.pop();
	return (arr.join(", ") + " " + last).trim();
}
