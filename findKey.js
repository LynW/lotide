const findKey = function(object, callback) {

  let result = null;

  for (const items of Object.keys(object)) {
    if (callback(object[items])) {
      return items;
    }
  }

  return result;
  
};

module.exports = findKey;