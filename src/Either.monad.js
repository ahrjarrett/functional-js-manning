
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
