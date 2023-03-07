"use strict";
function killer(suspectInfo, dead) {
	const names = Object.keys(suspectInfo);
	const suspect = Object.values(suspectInfo);
	suspect.forEach((item, i) => {
		for (let j = 0; j < dead.length; j++) {
			if (item.indexOf(dead[j]) == -1) {
				delete suspect[i];
				delete names[i];
			}
		}
	});
	names.sort();
	return names[0];
}
