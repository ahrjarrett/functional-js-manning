/* wrapper constructor:
 * functional data type used to wrap values;
 * unwrap with an identity function
 */

/* you’re mapping the identity function
 * over the container to extract the value
 * `as is` from the container
 */

R = require('ramda')


class Wrapper {
  constructor(value) {
    this._value = value
  }

  // map : (A -> B) -> A -> B
  map(f) {
    return f(this._value)
  }

  toString() {
    return 'Wrapper (' + this.value + ')'
  }
}

// wrap :: A -> Wrapper(A)
const wrap = (val) => new Wrapper(val)

module.exports = wrap


// testing...
const wrappedValue = wrap('Prof Bros is pretty rad.')
console.log(wrappedValue.map(R.identity)) //-> 'Prof Bros is pretty rad.'
wrappedValue.map(console.log) //-> 'Prof Bros is pretty rad.'
// notice how the two above are A -> B, then B-> A

console.log(wrappedValue.map(R.toUpper)) //-> 'PROS BROS IS PRETTY RAD.'
