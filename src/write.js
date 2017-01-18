/* see also: read.js, IO.monad.js

 * @param: document
 * @param: id

 * returns a function that receives a value that
 * returns (writes) a side effect.
 * write’s first param is the context (document) obj
 * write’s second param is the target document’s id,
 * indicating written to: `\#${id}` on the context provided (document)

 * for use with these partial applications:

 * const _ = require('lodash')
 * const readDom = _.partial(read, document)
 * const writeDom = _.partial(write, document)

*/

module.exports = function write(document, id) {
  return function(val) {
    return document.querySelector(`\#${id}`).innerHTML = val
  }
}
