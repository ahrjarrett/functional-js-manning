/*

 * of [intializer]:
 * receives a value (a) and returns a function
 * that returns that value (a) as the argument
 * that is the `effect` that is passed into the
 * IO constructor that becomes `this.effect`. so,
 * the `a` that is passed to `IO.of` is the
 * particular read/write operation to be performed.

 * from [initializer]:
 * explicitly receives a function, but
 * performs the same operation as `of`. as far as
 * i can tell, it is included only for expressiveness,
 * i.e., `from` receives, `of` sends.

 * map [functor]: lifts the value (the effect) from
 * it’s container, reinitializes another one of itself (new IO)
 * with the function it receives as applied to the function
 * with which it was created.

 * chain [like echo]:
 * just returns a function that returns the value
 * with which it was initialized (this.effect), so that
 * the return value can be passed into the next function’s
 * invocation.

 * run [also an initializer?]:

*/

const _ = require('lodash')

class IO {
  constructor(effect) {
    if(!_.isFunction(effect)) {
      throw 'IO initialization takes a function'
    }
    this.effect = effect
  }

  static of(a) {
    // love this use of an arrow function for readability
    return new IO( () => a )
  }
  static from(fn) {
    return new IO(fn)
  }

  // map functor
  map(fn) {
    var self = this
    return new IO(function() {
      return fn(self.effect())
    })
  }

  chain(fn) {
    return(fn(this.effect))
  }

  run() {
    return this.effect()
  }
}
