const areExactlySame = function(a, b) {
  return b === a;
}

const areAlmostSame = function(a, b, precision) {
  if(typeof a !== "number" || typeof b !== "number") {
    return false;
  }

  return (b >= a - precision) && (b <= a + precision);
}

const areSame = function(a, b) {
  return areExactlySame(a, b) || areAlmostSame(a, b, 0.01);
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

const isObject = function(a) {
  return typeof a === 'object' && !Array.isArray(a);
}

const isArray = function(a) {
  return Array.isArray(a);
}

const areDeepEqual = function(a, b) {
  if ([a,b].every(Array.isArray)) {
    return areArraysEqual(a,b);
  }

  if ([a,b].every(isObject)) {
    return areObjectsEqual(a,b);
  }

  return areSame(a, b);
}

exports.areDeepEqual = areDeepEqual;
