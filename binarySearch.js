const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let count = 0;

function binarySearch(array, item) {
	let start = 0;
	let end = arr.length;
	let middle;
	let found = false;
	let position = -1;
	while (!found && start <= end) {
		count++;
		middle = Math.floor((start + end) / 2);
		if (array[middle] === item) {
			found = true;
			position = middle;
			return position;
		}
		if (array[middle] > item) {
			end = middle - 1;
		} else {
			start = middle - 1;
		}
	}
	return position;
}
console.log(binarySearch(arr, 5));
console.log(count);

function recursiveBinarySearch(arr, item, start, end) {
	let middle = Math.floor((start + end) / 2);
	if (item === arr[middle]) {
		return middle;
	}
	if (item < arr[middle]) {
		return recursiveBinarySearch(arr, item, 0, middle - 1);
	} else {
		return recursiveBinarySearch(arr, item, middle + 1, end);
	}
}
