var result = 0;

const accumulator = {
  add(x) {
    result += x;
  },

  subtract(x) {
    result -= x;
  },

  multiply(x) {
    result *= x;
  },

  divide(x) {
    result /= x;
  },

  getResult() {
    return result;
  }

}

module.exports = accumulator;
