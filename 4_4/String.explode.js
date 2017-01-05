// assign to module.exports,
// rm console.log and replace w/ testing

const _ = require('lodash')

String.prototype.explode =
  _.partial(String.prototype.match, /[\w]/gi)

console.log('Trump'.explode()) //-> ['T', 'r', 'u', 'm', p']
