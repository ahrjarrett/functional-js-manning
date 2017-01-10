/* wrapper constructor:
 * functional data type (monad) used to wrap values;
 * simple unwrap with an identity function
 */

/* function signatures:
 * map : (A -> B) -> A -> B
 * wrap : A -> Wrapper(A)
 * fmap : (A, B) -> Wrapper[A] -> Wrapper[B]
 */

/* map (functor):
 * you’re mapping the identity function
 * over the container to extract the value
 * “as is” from the container
 * @alias: [Bind Function]
 */

/* fmap: is a functor that unwraps a
 * box, performs an operation on it,
 * and puts it in a different box
 */

/* of (static):
 * when implemented in a monad, `of` inserts
 * a value of a certain type into a monadic
 * structure
 * @alias: [Unit Function]
 */

/* join:
 * flattens layers of monads; useful for
 * composing multiple monad-returning fns
 */

/* todo:
 * consider adding wrap function below
 * to Wrapper.prototype.wrap, as in the
 * case of fmap
 */



class Wrapper {
  constructor(value) {
    this._value = value
  }

  static of(a) {
    return new Wrapper(a)
  }

  map(f) {
    return Wrapper.of(f(this.value))
  }

  join() {
    if(!(this.value instanceof Wrapper)) {
     return this
    }
    return this.value.join()
  }

  toString() {
    return `Wrapper (${this.value})`
  }
}

const wrap = (val) => new Wrapper(val)

Wrapper.prototype.fmap = function(f) {
  return wrap(f(this._value))
}

module.exports = Wrapper





//map(f) {
//  return f(this._value)
//}

