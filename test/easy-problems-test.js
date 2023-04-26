const testing = require("../lib/utils.js");
const problem = require("../src/easy-problems.js");

const it = testing.it;
const displayTestSummary = testing.displayTestSummary;
const displayTestResult = testing.displayTestResult;
const largestPrimeFactor = problem.largestPrimeFactor;
const nextPrime = problem.nextPrime;
const largestPalindromeProduct = problem.largestPalindromeProduct;
const smallestMultiple = problem.smallestMultiple;
const gcf = problem.gcf;
const nthPrime = problem.nthPrime;

const testNextPrime = function() {
  const functionName = "nextPrime({current: prime, increment: number})";

  it("Should give 3 for the next prime of 2", {
    actual: nextPrime({current: 2, increment: 2}),
    expected: {current: 3, increment: 2},
    functionName: functionName,
  });

  it("Should give 23 for the next prime of 29", {
    actual: nextPrime({current: 23, increment: 2}),
    expected: {current: 29, increment: 2},
    functionName: functionName,
  });

  displayTestResult(functionName);
}

const testLargestPrimeFactor = function() {
  const functionName = "largestPrimeFactor(number)";

  it("Should give 2 for 2 itself", {
    actual: largestPrimeFactor(2),
    expected: 2,
    functionName: functionName,
  });

  it("Should give 3 for 3 itself", {
    actual: largestPrimeFactor(3),
    expected: 3,
    functionName: functionName,
  });

  it("Should give 5 for 10", {
    actual: largestPrimeFactor(10),
    expected: 5,
    functionName: functionName,
  });

  it("Should give 29 for 29 itself", {
    actual: largestPrimeFactor(29),
    expected: 29,
    functionName: functionName,
  });

  it("Should give 61 for 61*34", {
    actual: largestPrimeFactor(61*34),
    expected: 61,
    functionName: functionName,
  });

  it("Should give 6857 for 600851475143", {
    actual: largestPrimeFactor(600851475143),
    expected: 6857,
    functionName: functionName,
  });

  it("Should give 61723 for 678953", {
    actual: largestPrimeFactor(678953),
    expected: 61723,
    functionName: functionName,
  });

  displayTestResult(functionName);
}

const testLargestPalindromeProduct = function() {
  const functionName = "largestPalindromeProduct()";

  it("Should give 9 for single digit", { 
    actual: largestPalindromeProduct(1),
    expected: 9,
    functionName: functionName,
  });

  // 99 * 91
  it("Should give 9009 for double digit", { 
    actual: largestPalindromeProduct(2),
    expected: 9009,
    functionName: functionName,
  });

  it("Should give 906609 for triple digit", { 
    actual: largestPalindromeProduct(3),
    expected: 906609,
    functionName: functionName,
  });

  displayTestResult(functionName);
}

const testGcf = function() {
  const functionName = "gcf(a,b)";

  it("Should give 1 for 1 and 2", {
    actual: gcf(1, 2),
    expected: 1,
    functionName: functionName,
  });

  it("Should give 17 for 34 and 51", {
    actual: gcf(34, 51),
    expected: 17,
    functionName: functionName,
  });

  it("Should give 7 for 7 and 7", {
    actual: gcf(7, 7),
    expected: 7,
    functionName: functionName,
  });

  displayTestResult(functionName);
}

const testSmallestMultiple = function () {
  const functionName = "smallestMultiple()";

  it("Should give 60 for smallest multiple upto 5", {
    actual: smallestMultiple(5),
    expected: 60,
    functionName: functionName,
  });

  displayTestResult(functionName);
}

const testNthPrime = function() {
  const functionName = "nthPrime(n)";

  it("Should give the first prime number", {
    actual: nthPrime(1),
    expected: 2,
    functionName: functionName,
  });

  it("Should give the second prime number", {
    actual: nthPrime(2),
    expected: 3,
    functionName: functionName,
  });

  it("Should give the nth prime number", {
    actual: nthPrime(100),
    expected: 541,
    functionName: functionName,
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
  displayTestSummary();
}

test();
