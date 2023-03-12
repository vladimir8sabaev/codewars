const arr = [1, 5, 4, 8, 5, 1, 2, 7, 5, 2, 11];
let count = 0;

function selectionSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		let indexMin = i;
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[indexMin]) {
				indexMin = j;
			}
			count++;
		}
		[arr[i], arr[indexMin]] = [arr[indexMin], arr[i]];
	}
	return arr;
}
console.log(selectionSort(arr));
console.log("count=", count);
