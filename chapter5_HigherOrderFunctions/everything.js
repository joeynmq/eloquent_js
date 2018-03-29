function every(array, test) {
  let error = 0;
  for (let elem of array) {
    if (test(elem) == false) {
      error ++;
    }
  }
  
  if(error > 0)
    return false;
  else
    return true;
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true