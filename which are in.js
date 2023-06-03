function inArray(arr1, arr2) {
  const set = new Set();
  arr1.forEach((item) => {
    arr2.forEach((word) => {
      if (word.includes(item)) {
        set.add(item);
      }
    });
  });
  return Array.from(set).sort();
}

a1 = ["arp", "live", "strong"];

a2 = ["lively", "alive", "harp", "sharp", "armstrong"];
console.log(inArray(a1, a2));
