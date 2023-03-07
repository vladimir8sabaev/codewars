function strCount(obj) {
	var count = 0;

	for (var val in obj) {
		if (typeof obj[val] === "object") {
			count += strCount(obj[val]);
		}
		if (typeof obj[val] === "string") {
			count++;
		}
	}
	return count;
}
