const style = require("./style.js");
const comparison = require("./comparison.js");
const redFg = style.redFg;
const greenFg = style.greenFg;
const yellowFg = style.yellowFg;
const bold = style.bold;
const toPrettyString = style.toPrettyString;
const areDeepEqual = comparison.areDeepEqual;

const it = function(testName, testData) {
  assertEqual(testData.actual, testData.expected, testName, testData.functionName);
}

const printHeadline = function(headline) {
  console.log(bold(yellowFg("\n" + headline)));
}

const formatTestResultDetail = function(actual, expected) {
  const line1 = greenFg("\n\tExpected:  " + toPrettyString(expected));
  const line2 = redFg("\n\t  Actual:  " + toPrettyString(actual));

  return line1 + line2;
}

const formatAssertionsMessageUpon = function(testData) {
  const icon = testData.result ? "✅" : "❌";
  const summary = "   " + icon + " " + testData.message;
  const details = formatTestResultDetail(testData.actual, testData.expected);

  return testData.result ? summary : summary + details;
}

const testLog = {};
testLog.totalAssertions = 0;
testLog.passedAssertions = 0;

const getTotalAssertions = function() {
  return testLog.totalAssertions;
}

const getPassedAssertions = function() {
  return testLog.passedAssertions;
}

const updateAssertionCount = function(result) {
  testLog.totalAssertions += 1;
  testLog.passedAssertions += result ? 1 : 0;
}

const addLog = function(result, actual, expected, message, functionName) {
  testLog[functionName] = testLog[functionName] || [];
  testLog[functionName].push({
    result: result,
    actual: actual,
    expected: expected,
    message: message,
  });
}

const assertEqual = function(actual, expected, message, functionName) {
  const result = areDeepEqual(actual, expected);
  addLog(result, actual, expected, message, functionName);

  return result;
}

const displayTestResult = function(functionName) {
  printHeadline("Testing " + functionName);
  const functionTestLog = testLog[functionName];

  for(const testData of functionTestLog) {
    console.log(formatAssertionsMessageUpon(testData));
    updateAssertionCount(testData.result);
  }
}

const displayTestSummary = function() {
  let message = "\nSummary: ";
  message += getPassedAssertions() + " / " + getTotalAssertions();
  message += " passed";
  console.log(message);
}

exports.assertEqual = assertEqual;
exports.displayTestSummary = displayTestSummary;
exports.displayTestResult = displayTestResult;
exports.it = it;
