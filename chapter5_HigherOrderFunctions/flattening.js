let arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.

function reduce(array) {
  let newArray = [];
  for (let element of array) {
    for(let elements of element){
    newArray.push(elements); 
    }
  }
  return newArray;
}

console.log(reduce(arrays));
// → [1, 2, 3, 4, 5, 6]