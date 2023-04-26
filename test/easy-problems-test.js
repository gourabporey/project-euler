const testing = require("../lib/utils.js");
const problem = require("../src/easy-problems.js");

const {
  it,
  displayTestSummary,
  displayTestResult
} = testing;

const {
  gcf, 
  nthPrime, 
  nextPrime, 
  sumOfPrimes, 
  smallestMultiple, 
  largestPrimeFactor, 
  largestPalindromeProduct, 
  triangularNumberOfDivisor, 
} = problem;

const testNextPrime = function() {
  const functionName = "nextPrime({current: prime, increment: number})";

  it("Should give 3 for the next prime of 2", {
    actual: nextPrime({current: 2, increment: 2}),
    expected: {current: 3, increment: 2},
    functionName,
  });

  it("Should give 23 for the next prime of 29", {
    actual: nextPrime({current: 23, increment: 2}),
    expected: {current: 29, increment: 2},
    functionName,
  });

  displayTestResult(functionName);
}

const testLargestPrimeFactor = function() {
  const functionName = "largestPrimeFactor(number)";

  it("Should give 2 for 2 itself", {
    actual: largestPrimeFactor(2),
    expected: 2,
    functionName,
  });

  it("Should give 3 for 3 itself", {
    actual: largestPrimeFactor(3),
    expected: 3,
    functionName,
  });

  it("Should give 5 for 10", {
    actual: largestPrimeFactor(10),
    expected: 5,
    functionName,
  });

  it("Should give 29 for 29 itself", {
    actual: largestPrimeFactor(29),
    expected: 29,
    functionName,
  });

  it("Should give 61 for 61*34", {
    actual: largestPrimeFactor(61*34),
    expected: 61,
    functionName,
  });

  it("Should give 6857 for 600851475143", {
    actual: largestPrimeFactor(600851475143),
    expected: 6857,
    functionName,
  });

  it("Should give 61723 for 678953", {
    actual: largestPrimeFactor(678953),
    expected: 61723,
    functionName,
  });

  displayTestResult(functionName);
}

const testLargestPalindromeProduct = function() {
  const functionName = "largestPalindromeProduct()";

  it("Should give 9 for single digit", { 
    actual: largestPalindromeProduct(1),
    expected: 9,
    functionName,
  });

  // 99 * 91
  it("Should give 9009 for double digit", { 
    actual: largestPalindromeProduct(2),
    expected: 9009,
    functionName,
  });

  it("Should give 906609 for triple digit", { 
    actual: largestPalindromeProduct(3),
    expected: 906609,
    functionName,
  });

  displayTestResult(functionName);
}

const testGcf = function() {
  const functionName = "gcf(a,b)";

  it("Should give 1 for 1 and 2", {
    actual: gcf(1, 2),
    expected: 1,
    functionName,
  });

  it("Should give 17 for 34 and 51", {
    actual: gcf(34, 51),
    expected: 17,
    functionName,
  });

  it("Should give 7 for 7 and 7", {
    actual: gcf(7, 7),
    expected: 7,
    functionName,
  });

  displayTestResult(functionName);
}

const testSmallestMultiple = function () {
  const functionName = "smallestMultiple()";

  it("Should give 60 for smallest multiple upto 5", {
    actual: smallestMultiple(5),
    expected: 60,
    functionName,
  });

  displayTestResult(functionName);
}

const testNthPrime = function() {
  const functionName = "nthPrime(n)";

  it("Should give the first prime number", {
    actual: nthPrime(1),
    expected: 2,
    functionName,
  });

  it("Should give the second prime number", {
    actual: nthPrime(2),
    expected: 3,
    functionName,
  });

  it("Should give the nth prime number", {
    actual: nthPrime(100),
    expected: 541,
    functionName,
  });

  displayTestResult(functionName);
}

const testSumOfPrimes = function() {
  const functionName = "sumOfPrimes()";

  it("Should give the first prime number for 2", {
    actual: sumOfPrimes(3),
    expected: 2,
    functionName,
  });

  it("Should give the sum of first 2 prime numbers", {
    actual: sumOfPrimes(5),
    expected: 5,
    functionName,
  });

  it("Should give the sum of any prime numbers upto N", {
    actual: sumOfPrimes(2000000),
    expected: 142913828922,
    functionName,
  });

  displayTestResult(functionName);
}

const testTriangularNumberOfDivisor = function() {
  const functionName = "triangularNumberOfDivisor()";

  it("Should give triangular number 3 having divisors more than 1", {
    actual: triangularNumberOfDivisor(1),
    expected: 3,
    functionName,
  });

  it("Should give triangular number 6 having divisors more than 2", {
    actual: triangularNumberOfDivisor(2),
    expected: 6,
    functionName,
  });

  it("Should give triangular number 28 having divisors more than 4", {
    actual: triangularNumberOfDivisor(4),
    expected: 28,
    functionName,
  });

  displayTestResult(functionName);
}

const test = function() {
  testNextPrime();
  testLargestPrimeFactor();
  testLargestPalindromeProduct();
  testSmallestMultiple();
  testGcf();
  testNthPrime();
  testSumOfPrimes();
  testTriangularNumberOfDivisor();
  displayTestSummary();
}

test();
