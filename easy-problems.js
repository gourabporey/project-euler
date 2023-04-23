// Sum of all even fibonacii terms
const fibonacciSumOfEven = function() {
  let secondLastTerm = 0;
  let lastTerm = 1;
  let sum = 0;

  let counter = 0;
  while(secondLastTerm <= 4000000) {
    if(counter % 3 === 0) {
      sum += secondLastTerm;
    }

    const temp = secondLastTerm;
    secondLastTerm = lastTerm;
    lastTerm += temp;
    counter++;
  }

  return sum;
}

// Multiples of 3 and 5 
const sumOfMultiples = function() {
  const multiplesOf3 = Math.floor((1000 - 1) / 3);
  const multiplesOf5 = Math.floor((1000 - 1) / 5);
  const multiplesOf15 = Math.floor((1000 - 1) / 15);

  let sum = 0;
  sum += multiplesOf3 /  2 * ((2 * 3 + (multiplesOf3 - 1) * 3));
  sum += multiplesOf5 /  2 * ((2 * 5 + (multiplesOf5 - 1) * 5));
  sum -= multiplesOf15 /  2 * ((2 * 15 + (multiplesOf15 - 1) * 15));

  return sum; 
}

