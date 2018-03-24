function arrayToList(array) {
  let list = null;
  
  for(let i = array.length - 1; i >= 0; i--) {
    list = {value: array[i], rest: list};
  }
  return list;
}

function listToArray(list) {
  let anArray = [];
  
  for (let node = list; node; node = node.rest) {
    anArray.push(node.value);
  }
  
  return anArray;
}

function prepend(element, list) {
  let newList = null;
  
  newList = {value: element, rest: list};
  
  return newList;
}

function nth(list, index) {
  if (!list) return undefined;
  
  if (index == 0) {
    return list.value;
  } else {
    return nth(list.rest, index - 1);
  }
  
}

console.log(arrayToList([10, 20]));
// ? {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// ? [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// ? {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// ? 20