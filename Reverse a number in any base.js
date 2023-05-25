function reverseNumber(n, b) {
  console.log(BigInt(n).toString(b).split("").reverse().join(""));
  return n;
}
reverseNumber(12, 2);
