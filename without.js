const without = function(source, itemsToRemove) {

  for (let i = 0; i < source.length - 1; i++) {

    for (let j = 0; j < itemsToRemove.length; j++) {

      if (source[i] === itemsToRemove[j]) {
        source.splice(i, 1);
      }
    }
  }
  return source;

};

module.exports = without;