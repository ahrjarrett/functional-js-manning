const R = require('ramda')

/* alternation combinator */
const alt = R.curry((fn1, fn2, val) => fn1(val) || fn2(val))

/* notice how using curry & lambdas removes need for
 * nesting functions that return values from their
 * closures */

module.exports = alt

/* alt :: defined less succinctly: */

/*
const alt = function(fn1, fn2) {
  return function(val) {
    return fn1(val) || fn2(val)
  }
}
*/
