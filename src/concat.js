// This is from page 60, which uses a concat fn but doesn’t define it.
function concatES5(xs) {
  var args = Array.prototype.slice.call(arguments)
  var result = ''
  args.map(function(x) {
    result += x
  })
  return result
}

// Rewritten w/ arrow functions
const concat = (...xs) => xs.reduce((x, y) => x += y, '')

console.log(concat('does', 'this', 'work'))
console.log(concatES5('does', 'this', 'work'))
