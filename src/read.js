/* see also: write.js, IO.monad.js

 * @param: document
 * @param: id

 * returns a function that returns an effect
 * to be passed into the IO monad

 * for use with these partial applications:

 * const _ = require('lodash')
 * const readDom = _.partial(read, document)
 * const writeDom = _.partial(write, document)

*/

module.exports = function read(document, id) {
  return function() {
    return document.querySelector(`\#${id}`).innerHTML
  }
}
