function countBs (string) {
  let counter = countChar(string, 'B');
  return counter;
}
           
function countChar (string, char) {
  let counter = 0;
   for (i = 0 ; i < string.length ; i++ ) {
    if (string[i] == char) counter++;
  }
  return counter;
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4