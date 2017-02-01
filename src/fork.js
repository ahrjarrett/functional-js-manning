const R = require('ramda')

/*
 * the key to using fork correctly is understanding the join param
 * and how it applies the remaining two functions
 */

/* fork : Function, Function, Function -> Value */
const fork = function(join, fn1, fn2) {
  return function(val) {
    return join(fn1(val), fn2(val))
  }
}

module.exports = fork
