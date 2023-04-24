const isExactlySame = function(actual, expected) {
  return expected === actual;
}

const isAlmostSame = function(actual, expected, precision) {
  if(typeof actual !== "number" || typeof expected !== "number") {
    return false;
  }

  return (expected >= actual - precision) && (expected <= actual + precision);
}

const isSame = function(actual, expected) {
  return isExactlySame(actual, expected) || isAlmostSame(actual, expected, 0.01);
}

const areArraysEqual = function(firstArray, secondArray) {
  if(firstArray.length !== secondArray.length) {
    return false;
  }

  return firstArray.every(function(element, index) {
    return areDeepEqual(element, secondArray[index]);
  });
}

const areObjectsEqual = function(firstObj, secondObj) {
  const firstObjKeys = Object.keys(firstObj);
  const secondObjKeys = Object.keys(secondObj);

  if(firstObjKeys.length !== secondObjKeys.length) {
    return false;
  }

  return firstObjKeys.every(function(value, key) {
    return areDeepEqual(value, secondObjKeys[key]);
  });
}

const typeOf = function(value) {
  if(value === null) {
    return "null";
  }

  return Array.isArray(value) ? "array" : typeof value;
}

const comparatorOf = function(type) {
  const predicate = {
    "array": areArraysEqual,
    "object": areObjectsEqual,
  }

  return predicate[type] || isSame;
}

const areDeepEqual = function(actual, expected) {
  if(typeOf(actual) !== typeOf(expected)) {
    return false;
  }

  return comparatorOf(typeOf(expected))(actual, expected);
}

exports.areDeepEqual = areDeepEqual;
