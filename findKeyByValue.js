const findKeyByValue = function(obj, value) {

  for (const item of Object.keys(obj)) {

    if (obj[item] === value) {
      return item;
    }

  }

};

module.exports = findKeyByValue;