"use strict";
var countBits = function (n) {
	if (n == 0) {
		return 0;
	}
	return n.toString(2).match(/[1]/g).length;
};
