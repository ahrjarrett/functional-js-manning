const _ = require('lodash')

// parses a simple URL
String.prototype.parseUrl = _.partial(String.prototype.match,
  /(http[s]?|ftp):\/\/([^:\/\s]+)\.([^:\/\s]{2,5})/
)

console.log('http://github.com'.parseUrl()) // -> ['http', 'github', 'com']

