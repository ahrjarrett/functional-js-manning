const _ = require('lodash')

// return the first N char
if(!String.prototype.first) {
  String.prototype.first = _.partial(String.prototype.substring, 0, _)
}

console.log(`scientologists are expected to write
             such reports because they believe, by
             writing them...`.first(3)) // => sci
