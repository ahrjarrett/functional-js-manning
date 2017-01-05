const _ = require('lodash')

// return the first N char
String.prototype.first = _.partial(String.prototype.substring, 0, _)

console.log(`scientologists are expected to write
             such reports because they believe, by
             writing them...`.first(3))
