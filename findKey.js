const assertEqual = require('./assertEqual');


const findKey = function (object, callback) {
  result = {};

  for (let items of Object.keys(object)) {
    if (callback(object[items])) {
      return items;
    }
  }

  return result;
}

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma"); // => "noma"