/* wrapper constructor:
 * functional data type used to wrap values;
 * unwrap with an identity function
 */

/* function signatures:
 * map : (A -> B) -> A -> B
 * wrap : A -> Wrapper(A)
 * fmap : (A, B) -> Wrapper[A] -> Wrapper[B]
 */

/* map: you’re mapping the identity function
 * over the container to extract the value
 * “as is” from the container
 */

/* fmap: is a functor that unwraps a
 * box, performs an operation on it,
 * and puts it in a different box
 */

/* todo:
 * consider adding wrap function below
 * to Wrapper.prototype.wrap, as in the
 * case of fmap
 */

R = require('ramda')


class Wrapper {
  constructor(value) {
    this._value = value
  }

  map(f) {
    return f(this._value)
  }

  toString() {
    return 'Wrapper (' + this.value + ')'
  }
}

const wrap = (val) => new Wrapper(val)

Wrapper.prototype.fmap = function(f) {
  return wrap(f(this._value))
}

module.exports = Wrapper
