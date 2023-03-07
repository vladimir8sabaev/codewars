"use strict";
function findNeedle(haystack) {
	for (let i = 0; i < haystack.length; i++) {
		if (haystack[i] === "needle") {
			console.log("found the needle at position " + i);
			return "found the needle at position " + i;
		}
	}
}
