function modifyMultiply(str, loc, num) {
  const word = str.split(" ")[loc];
  let sum = word;
  for (let i = 1; i < num; i += 1) {
    sum += `-${word}`;
  }
  return sum;
}
