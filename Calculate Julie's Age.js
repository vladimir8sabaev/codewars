function age(x, y){
  return Math.round(x/(1-1/y));
}

console.log(age(-15,0.25));