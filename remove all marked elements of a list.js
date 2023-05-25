const spliceArr = function (integer_list, values_list) {
  for (let i = 0; i < integer_list.length; i++) {
    if (values_list.indexOf(integer_list[i]) !== -1) {
      integer_list.splice(i, 1);
      i--;
    }
  }
  return integer_list;
};

console.log(spliceArr([1, 1, 2, 3, 1, 2, 3, 4], [1, 3]));
