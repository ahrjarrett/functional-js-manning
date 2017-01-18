/*
 * Either’s constructor fn:
 * works for either type, can hold an exception
 * or a successful value (right bias).
 *
 * Either.fromNullable [static]:
 * IMPORTANT -- takes the Left case w/
 * invalid value, or else the Right
 *
 * Either.of [static]:
 * creates new instance holding a value on the Right
 *
 * map:
 * --case Right: tranforms the value on the Right structure
 * by mapping a fn to it
 * --case Left: does nothing (noop)
 *
 * get value:
 * --case Right: use logic in constructor fn; that is,
 * extract the Right value of the structure if it exists
 * --case Left: produce a TypeError
 *
 * getOrElse:
 * --case Right: extrats the Right value
 * --case Left: returns the passed-in default
 *
 * orElse:
 * --case Right: noop
 * --case Left: applies a given fn to Left value
 *
 * chain:
 * --case Right: applies a function to a Right
 * and returns that value
 * --case Left: noop
 *
 * getOrElseThrow:
 * throws an exception with the value only
 * on the Left structure; otherwise ignores the
 * the exception and returns the value value
 *
 * filter:
 * --case Right: if value is present and meets
 * the given predicate, returns a Right describing
 * the value
 * --case Left: noop
 */

class Either {
  constructor(value) {
    this._vlaue = value
  }
  get value() {
    return this._value
  }
  static left(a) {
    return new Left(a)
  }
  static right(a) {
    return new Right(a)
  }
  static fromNullable(val) {
    return val !== null ? right(val) : left(val)
  }
  static of(a) {
    return right(a)
  }
}

class Left extends Either {
  map(_) {
    return this
  }
  get value() {
    throw new TypeError('Cannot extract the value of Left(a)')
  }
  getOrElse(other) {
    return other
  }
  orElse(f) {
    return f(this.value)
  }
  chain(f) {
    return this
  }
  getOrElseThrow(a) {
    throw new Error(a)
  }
  filter(f) {
    return this
  }
  toString() {
    return `Either.Left(${this.value})`
  }
}

class Right extends Either {
  map(f) {
    return Either.of(f(this.value))
  }
  getOrElse(other) {
    return this.value
  }
  orElse() {
    return this
  }
  chain(f) {
    return f(this.value)
  }
  getOrElseThrow(_) {
    return this.value
  }
  filter(f) {
    return Either.fromNullable( f(this.value) ? this.value : null )
  }
  toString() {
    return `Either.Right(${this.value})`
  }
}

// todo: how to add to exports object?

/*
module.exports = Either
*/
