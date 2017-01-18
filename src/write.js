/*

 * @param: document
 * @param: id

 * returns a function that receives a value that
 * returns (writes) a side effect.
 * write’s first param is the context (document) obj
 * write’s second param is the target document’s id,
 * indicating written to: `\#${id}` on the context provided (document)

*/

module.exports = function write(document, id) {
  return function(val) {
    return document.querySelector(`\#${id}`).innerHTML = val
  }
}
