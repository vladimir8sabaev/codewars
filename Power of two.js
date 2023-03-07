"use strict";
function isPowerOfTwo(n) {
	if (n > 0) {
		while (n > 1) {
			if (n % 2 === 0) {
				n /= 2;
			} else {
				return false;
			}
		}
		return true;
	} else {
		return false;
	}
}
