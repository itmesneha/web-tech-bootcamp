const accumulator = require('./accumulator');

accumulator.result = 0;

const x = 100;

accumulator.add(100);
accumulator.subtract(50);
accumulator.multiply(10);
accumulator.divide(2);
console.log(accumulator.result);