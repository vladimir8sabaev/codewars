const input = [0, 4, 6, 8, 8, 8, 5, 5, 7];

function setReducer(arr) {
  while (arr.length - 1) {
    arr = arr.reduce((a, v, i) => {
      if (v != arr[i - 1]) a.push(1);
      else a[a.length - 1]++;
      return a;
    }, []);
  }
  return arr.pop();
}
