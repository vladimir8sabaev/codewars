function maxRot(n) {
  let max = n;
  let mixArr = ("" + n).split("");
  for (let i = 0; i < mixArr.length; i++) {
    let last = mixArr.splice(i, 1);
    mixArr.push(last[0]);
    if (+mixArr.join("") > max) {
      max = +mixArr.join("");
    }
  }
  return max;
}

console.log(maxRot(56789));
