function calc_ms(n) {
  if (n === 0) {
    return 1;
  }
  return 20 * calc_ms(n - 1);
}
console.log(calc_ms(5));
