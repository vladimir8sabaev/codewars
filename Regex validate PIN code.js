"use strict";
function validatePIN(pin) {
	if ((pin.length == 4 || pin.length == 6) && !/[^\d]/g.test(pin)) {
		console.log(true);
		return true;
	} else {
		console.log(false);
		return false;
	}
}
