"use strict";
function find(obj, path) {
	path = path.split(".");
	for (i in path) {
		if (obj.hasOwnProperty(path[i]) === true) {
			obj = obj[path[i]];
		} else {
			return undefined;
		}
	}

	return obj;
}
