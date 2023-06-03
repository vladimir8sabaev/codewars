function bubblesortOnce(a) {
  const arr = [...a];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
    }
  }
  return arr;
}
bubblesortOnce([9, 7, 5, 3, 1, 2, 4, 6, 8]);
