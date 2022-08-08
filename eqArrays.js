const eqArrays = function(array1, array2) {

  let result = false;

  if (array1.length !== array2.length) {
    return result;
  }

  if (array1.length === 0) {
    result = true;
    return result;
  }

  if (array1 === [] && array2 === []) {
    result = true;
    return result;
  }

  for (let i = 0; i < array1.length; i++) {

    if (array1[i] === array2[i]) {
      result = true;
    } else {
      return false
    }
    
  }
  
  return result;

};

module.exports = eqArrays;
