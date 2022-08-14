const assertEqual = require('../assertEqual');
const findKey = require('../findKey');

const myStars = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

assertEqual(findKey(myStars, x => x.stars === 2), "noma");
assertEqual(findKey(myStars, x => x.stars === 3), "Akaleri");
assertEqual(findKey(myStars, x => x.stars === 32), null);