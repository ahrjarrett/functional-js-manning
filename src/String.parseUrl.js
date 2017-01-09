const _ = require('lodash')

// wrap method in cond to feature-check
if(!String.prototype.parseUrl) {
  // parses a simple URL
  String.prototype.parseUrl = _.partial(String.prototype.match,
    /(http[s]?|ftp):\/\/([^:\/\s]+)\.([^:\/\s]{2,5})/
  )
}

console.log('http://github.com'.parseUrl()) // -> ['http', 'github', 'com']
