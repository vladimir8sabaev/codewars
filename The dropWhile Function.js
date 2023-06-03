function isEven(num) {
  return num % 2 === 0;
}

function dropWhile(arr, pred) {
  let i = 0;
  while (i < arr.length && pred(arr[i])) {
    i++;
  }
  return arr.slice(i);
}
console.log(dropWhile([2, 6, 4, 10, 1, 5, 4, 3], isEven));
