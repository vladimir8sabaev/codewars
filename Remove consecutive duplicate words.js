function removeConsecutiveDuplicates(string) {
  const arr = string.split(" ");
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) {
      arr.splice(i + 1, 1);
      i--;
    }
  }
  return arr.join(" ");
}
