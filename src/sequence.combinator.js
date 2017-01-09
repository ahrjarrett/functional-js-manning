/* sequence combinator */

/* seq takes 2 or more functions and
 * runs them against the same value,
 * allowing us to perform a series of
 * related, yet independent, operations.

 * note: b/c seq doesn't actually return
 * a value, use R.tap to inject it into
 * a composition
 */

const seq = function(/* fns */) {
  const fns = Array.prototype.slice.call(arguments)
  return function(val) {
    fns.forEach(function(fn) {
      fn(val)
    })
  }
}

module.exports = seq
