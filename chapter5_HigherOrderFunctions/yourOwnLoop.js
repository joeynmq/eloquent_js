
function loop(val, test, update, action) {
  if(!test(val)) {
    return false;
  }
  
  for(let current = val; test(current); current = update(current)) {
    action(current);
  }
}

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1