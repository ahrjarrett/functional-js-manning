const _ = require('lodash')

// converts full name to Last, First
String.prototype.asName =
  _.partial(String.prototype.replace, /(\w+)\s(\w+)/, '$2, $1')

console.log('Bruce Springsteen'.asName())

