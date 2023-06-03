function factorial(n) {
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
}
function sumFactorial(arr) {
  return arr.reduce(function (currentSum, currentNumber) {
    return currentSum + factorial(currentNumber);
  }, 0);
}

console.log(sumFactorial([4, 6]));
