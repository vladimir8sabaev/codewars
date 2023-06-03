function divCon(arr) {
  let sumStr = 0;
  let sumNum = 0;
  arr.forEach((item) => {
    if (typeof item === "string") {
      sumStr += +item;
    } else if (typeof item === "number") {
      sumNum += item;
    }
  });
  return sumNum - sumStr;
}
console.log(divCon([9, 3, "7", "3"]));
