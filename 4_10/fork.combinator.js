/* fork combinator */

// ramda for testing; fork doesn't depend on it
const R = require('ramda')

/* useful in cases where you need to process
 * a single resource in 2 different ways, and
 * then combine the results.
 */

// fork : Function, Function, Function -> Value
const fork = function(join, fn1, fn2) {
  return function(val) {
    return join(fn1(val), fn2(val))
  }
}

// example usage:
const computeAvgGrade =
  fork(R.divide, R.sum, R.length)

console.log(computeAvgGrade([76, 92, 87])) // -> 85

module.exports = fork
