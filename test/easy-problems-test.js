const testing = require("../lib/utils.js");
const problem = require("../src/easy-problems.js");

const it = testing.it;
const displayTestSummary = testing.displayTestSummary;
const displayTestResult = testing.displayTestResult;
const largestPrimeFactor = problem.largestPrimeFactor;
const nextPrime = problem.nextPrime;

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

const test = function() {
  testNextPrime();
  testLargestPrimeFactor();
  displayTestSummary();
}

test();
