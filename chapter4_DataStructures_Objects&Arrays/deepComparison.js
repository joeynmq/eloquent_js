function deepEqual(val1, val2) {
  if(val1 === null || val1 === undefined || val2 === null || undefined ) {
    return false;
  }

  let keyList = Object.keys(val1);
 
  for(let i = 0, j = keyList.length; i < j; i++) {
    if(String(val1[keyList[i]]) !== String(val2[keyList[i]])) {
      return false;
    } 
  }
  
  return true;
}


let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true