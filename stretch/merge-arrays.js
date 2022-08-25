function merge(array1, array2) {
  
  //merge input arrays into new array
  let array = array1.concat(array2);
  let finalArray = [];

  array.sort();
  for(let each of array) {

  }
  return array;
}


console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]));
