"use strict";
function vowelOne(s) {
	let res = "";
	for (let i = 0; i < s.length; i++) {
		s[i].toLowerCase().match("[aeiou]") ? (res += 1) : (res += 0);
	}
	return res;
}
