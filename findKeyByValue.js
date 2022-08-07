const assertEqual = require('./assertEqual');

const findKeyByValue = function(obj, value) {

  for (let item of Object.keys(obj)) {
    if (obj[item] === value) {
      return item;
    }
  }

};

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);