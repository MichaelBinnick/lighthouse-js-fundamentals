function lastIndexOf(array, value) {
  for (let i = array.length; i > 0; i--) {
    if (array.length === 1) {
      return 0;
    }
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);
console.log(lastIndexOf([2],2), "=?", 2);