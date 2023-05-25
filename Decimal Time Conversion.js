function toIndustrial(time) {
  if (typeof time === "number") {
    return Number((time / 60).toFixed(2));
  } else {
    let h = Number(time.split(":")[0]);
    let m = Number((time.split(":")[1] / 60).toFixed(2));
    return h + m;
  }
}

function toNormal(time) {
  return(`${Math.floor(time)}:${((time % 1) * 0.6).toFixed(2).slice(2)}`);
}

