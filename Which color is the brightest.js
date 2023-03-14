"use strict";

function brightest(colors) {
	const arr = [];
	function hexToRGB(hex) {
		let r = parseInt(hex.slice(1, 3), 16),
			g = parseInt(hex.slice(3, 5), 16),
			b = parseInt(hex.slice(5, 7), 16);
		arr.push(Math.max(r, g, b));
		return arr;
	}
	colors.forEach((color) => {
		hexToRGB(color);
	});
	return colors[arr.indexOf(Math.max.apply(null, arr))];
}
brightest(["#FFFFFF", "#123456", "#000000"]);
