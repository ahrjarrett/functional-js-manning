/* see also: write.js, IO.monad.js

 * @param: document
 * @param: id

 * returns a function that returns an effect
 * to be passed into the IO monad

*/

module.exports = function read(document, id) {
  return function() {
    return document.querySelector(`\#${id}`).innerHTML
  }
}
