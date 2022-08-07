const findKeyByValue = function(obj, value) {

  for (let item of Object.keys(obj)) {
    if (obj[item] === value) {
      return item;
    }
  }

};

module.exports = findKeyByValue;