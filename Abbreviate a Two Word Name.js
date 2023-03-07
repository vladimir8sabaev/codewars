"use strict";
function abbrevName(name) {
	for (let i = 0; i < name.length; i++) {
		if (name[i] === " ") {
			console.log(`${name[0].toUpperCase()}.${name[i + 1].toUpperCase()}`);
			return `${name[0].toUpperCase()}.${name[i + 1].toUpperCase()}`;
		}
	}
}
