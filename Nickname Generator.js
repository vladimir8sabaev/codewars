"use strict";
function nicknameGenerator(name) {
	return name.length < 4
		? "Error: Name too short"
		: name[2].match("[aeiou]")
		? name.slice(0, 4)
		: name.slice(0, 3);
}
