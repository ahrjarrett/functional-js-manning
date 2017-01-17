/* fromNullable [static]:
 * builds a Maybe from a nullable type
 * (constructor function). if the value
 * lifted in the monad is null, instantiates
 * a Nothing; otherwise stores the value in
 * a Just subtype to handle the presence
 * of a value.
 *
 * Just [Subtype]:
 * handle the presence of a value.
 *
 * Just.map [method]:
 * maps a fn to Just, transforms its value,
 * and stores it back into the container.
 *
 * Just.getOrElse [method]:
 * extracts the value from the structure or a
 * provided default monad unity operation
 *
 * Just.toString [method]:
 * returns a textual representation
 * of this structure.
 *
 * Nothing [Subtype]:
 * protects against the absence of a value.
 *
 * Nothing.value [method]:
 * attempting to extract a value from a Nothing type
 * generates an exception indicating a bad use of the
 * monad; otherwise the value is returned.
 *
 * Nothing.getOrElse [method]:
 * ignores the value and returns the other.
 *
 * Nothing.filter [method]:
 * if a value is present and matches the given
 * predicate, returns a Just describing the value;
 * otherwise returns a Nothing.
 */


class Maybe {
  static just(a) {
    return new Just(a)
  }
  static nothing() {
    return new Nothing()
  }
  static fromNullable(a) {
    return a !== null ? just(a) : nothing()
  }
  get isNothing() {
    return false
  }
  get isJust() {
    return false
  }
}

class Just extends Maybe {
  constructor(value) {
    super()
    this._value = value
  }
  get value() {
    return this._value
  }
  map(f) {
    return of(f(this.value))
  }
  getOrElse() {
    return this.value
  }
  filter(f) {
    Maybe.fromNullable( f(this.value) ? this.value : null )
  }
  get isJust() {
    return true
  }
  toString() {
    return `Maybe.Just(${this.value})`
  }
}

class Nothing extends Maybe {
  map(f) {
    return this
  }
  get value() {
    throw new TypeError('cannot extract the value of a Nothing.')
  }
  getOrElse(other) {
    return other
  }
  filter() {
    return this.value
  }
  get isNothing() {
    return true
  }
  toString() {
    return 'Maybe.Nothing'
  }
}
