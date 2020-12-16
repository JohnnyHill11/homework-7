function getSumNumbers(n) {
  if (n === 0 || n === 1) {
    return n;
  }
  else {
    return getSumNumbers(n - 1) + n;
  }
}
console.log(getSumNumbers(10));