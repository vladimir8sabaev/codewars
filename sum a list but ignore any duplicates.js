function sumNoDuplicates(numList) {
  let sum = 0;
  numList.forEach((item) => {
    if (numList.indexOf(item) === numList.lastIndexOf(item)) {
      sum += item;
    }
  });
  return sum;
}
console.log(sumNoDuplicates([1, 1, 2, 3]));
