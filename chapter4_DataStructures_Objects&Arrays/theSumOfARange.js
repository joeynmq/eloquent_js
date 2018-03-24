function range(n1, n2, step = n1 < n2 ? 1 : -1) {
  let numbers = [];
  
  if(step > 0) {
    for (let i = n1; i <= n2; i += step) {
      numbers.push(i);
    } 
  } else {
    for (let i = n1; i >= n2; i += step) {
      numbers.push(i);
    } 
  }
      
  return numbers;
}

function sum(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  
  return total;
}

console.log(range(1, 10));
// ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// ? [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// ? 55