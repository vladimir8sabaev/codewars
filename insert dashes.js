function insertDash(num) {
  num = ("" + num).split("");
  for (let i = 0; i < num.length - 1; i++) {
    if (num[i] % 2 === 1 && num[i + 1] % 2 === 1) {
      num[i] += "-";
    }
  }
  return num.join("");
}
insertDash(454793);
