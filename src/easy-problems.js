// Sum Square Difference
const sumOfSeries = function(n) {
  return n * (n + 1) / 2;
}

const sumOfSquaredSeries = function(n) {
  return n * (n + 1) * (2 * n + 1) / 6;
}

const sumSquareDifference = function(n) {
  return sumOfSeries(n) ** 2 - sumOfSquaredSeries(n);
}

// smallest multiple upto number
const gcf = function(a, b) {
  let min = a;
  let max = b;

  if(a > b) {
    min = b;
    max = a;
  }

  if(max % min === 0) return min;

  let num = min;
  while(num > 1) {
    if(max % num === 0 && min % num === 0) return num;
    num--;
  }

  return num;
}

const lcm = function(a, b) {
  return (a * b) / gcf(a, b);
}

const smallestMultiple = function(number) {
  const numbers = [];

  for(let i = 1; i <= number; i++) {
    numbers.push(i);
  }

  return numbers.reduce(function(currLcm, element) {
    return lcm(currLcm, element);
  });
}

// largest palindromic number as the multiple of two number
const isPalindrome = function(text) {
  const characters = text.toString().split("");
  return characters.every(function(element, index) {
    return element === characters[characters.length - index - 1]; 
  });
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

// Nth prime number
const nthPrime = function(n) {
  let prime = {
    current: 2,
    increment: 1,
  };

  for(let term = 1; term < n; term++) {
    prime = nextPrime(prime);
  }

  return prime.current;
}

const largestPrimeFactor = function(num) {
  let dividend = num;

  let prime = {
    current: 2,
    increment: 1,
  };

  while(dividend !== 1) {
    if(dividend % prime.current === 0) {
      dividend = dividend / prime.current;
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

const largestProductInASeries = function() {
  const series = "7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450";

  const numbers = series.split("").map(function(element) {
    return +element;
  });

  let maxProduct = 0;
  for(let count = 0; count < 1000 - 13; count++) {
    const currentNumbers = numbers.slice(count, count + 13);
    if(!currentNumbers.includes(0)) {
      maxProduct = Math.max(maxProduct, currentNumbers.reduce(function(p, el) {
        return p * el;
      }));
    }
  }

  return maxProduct;
}

const pythagorianTriplet = function() {
  let b = 500;

  while(b > 0) {
    let a = 300;
    while(a > 0) {
      const c = Math.sqrt(a ** 2 + b ** 2);
      console.log(a, b, c);
      if (a + b + c === 1000) return a * b * c;
      a--;
    }
    b--;
  }

  return 0;
}


exports.largestPrimeFactor = largestPrimeFactor ;
exports.nextPrime = nextPrime;
exports.largestPalindromeProduct = largestPalindromeProduct;
exports.gcf = gcf;
exports.smallestMultiple = smallestMultiple;
exports.nthPrime = nthPrime;
