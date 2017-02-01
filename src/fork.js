const R = require('ramda')

const fork = function(join, fn1, fn2) {
  return function(val) {
    return join(fn1(val), fn2(val))
  }
}

module.exports = fork

