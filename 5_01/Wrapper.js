/* wrapper constructor:
 * functional data type used to wrap values;
 * unwrap with an identity function
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


// testing...
const wrappedValue = wrap('Prof Bros is pretty rad.')
console.log(wrappedValue.map(R.identity)) //-> 'Prof Bros is pretty rad.'
