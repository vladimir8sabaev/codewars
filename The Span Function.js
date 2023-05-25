function isEven(x) {
  return Math.abs(x) % 2 === 0;
}

function isOdd(x) {
  return Math.abs(x) % 2 !== 0;
}

var arr1 = [2, 4, 6, 1, 4, 8];
var arr2 = [1, 4, 5, 7, 6];
var arr3 = [13, 17, 19, 11, 21];

function span(arr, predicate) {
  let newArr = [[], []];
  arr.forEach((item, i) => {
    if (predicate(item)) {
      newArr[0].push(item);
    } else {
      newArr[1] = [...arr.splice(i, arr.length - i)];
    }
  });
  console.log(newArr);
  return newArr;
}
span(arr2, isOdd);
