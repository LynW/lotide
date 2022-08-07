let assertEqual = require('../assertEqual');
let countLetters = require('../countLetters');

assertEqual(countLetters('chicken'), 7);
assertEqual(countLetters(''), 0);
assertEqual(countLetters('Lighthouse Labs'), 15);
