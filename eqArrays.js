const eqArrays = function(array1, array2) {

  let result = false;

  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) {
      result = true;
    } else {
      result = false;
    }
  }
  
  return result;

};

module.exports = eqArrays;