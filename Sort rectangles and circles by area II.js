function solveArea(item) {
  if (Array.isArray(item)) {
    return item[0] * item[1];
  } else {
    return Math.PI * item ** 2;
  }
}
function sortByArea(arr) {
  newArr = [...arr];
  return newArr.sort((a, b) => {
    return solveArea(a) - solveArea(b);
  });
}

console.log(sortByArea([[4.23, 6.43], 1.23, 3.444, [1.342, 3.212]]));
