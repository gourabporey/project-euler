// largest palindromic number as the multiple of two number
const isPalindrome = function(text) {
  const reversed = text.toString().split("").reverse().join("");
  return text.toString() === reversed;
}

const getUpperLimit = function(digit) {
  return (10 ** digit) - 1; 
}

const getLowerLimit = function(digit) {
  return 10 ** (digit - 1);
}

const largestPalindromeProduct = function(digit) {
  const upperLimit = getUpperLimit(digit);
  const lowerLimit = getLowerLimit(digit);
  let max = -Infinity;

  for(let num1 = upperLimit; num1 >= lowerLimit; num1--) {
    for(let num2 = upperLimit; num2 >= lowerLimit; num2--) {
      if(num1 % 10 !== 0 && num2 % 10 !== 0) {
        if(isPalindrome(num1 * num2)) {
          max = Math.max(max, num1 * num2);
        }
      }
    }
  }

  return max;
}

// largest prime factor of the number 600851475143
const isPrime = function(num) {
  let factor = 3;

  while(factor <= Math.sqrt(num)) {
    if(num % factor === 0) return false;
    factor += 2;
  }

  return true;
}

const nextPrime = function(prime) {
  if(prime.current === 2) return {current: 3, increment: 2};

  if(prime.current === 3) return {current: 5, increment: 2};

  let potentialPrime = prime.current + prime.increment;
  prime.increment = prime.increment % 4 + 2;
  prime.current = potentialPrime;

  return isPrime(potentialPrime) ? prime : nextPrime(prime);
}

const largestPrimeFactor = function(num) {
  let modifiableCopyOfNum = num;

  let prime = {
    current: 2,
    increment: 1,
  };

  while(modifiableCopyOfNum !== 1) {
    if(modifiableCopyOfNum % prime.current === 0) {
      modifiableCopyOfNum = modifiableCopyOfNum / prime.current;
    } else {
      prime = nextPrime(prime);
    }
  }

  return prime.current;
}

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

exports.largestPrimeFactor = largestPrimeFactor ;
exports.nextPrime = nextPrime;
exports.largestPalindromeProduct = largestPalindromeProduct;
