"use strict";
function getParticipants(handshakes) {
	let sum = 0;
	let number = 0;
	while (handshakes > sum) {
		sum += number;
		number += 1;
	}
	return number;
}
