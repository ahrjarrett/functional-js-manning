// This is from page 60, which uses a concat fn but doesn’t define it.

function concat(xs) {
  var args = Array.prototype.slice.call(arguments)
  var result = ''
  args.map(function(x) {
    result += x
  })
  return result
}

console.log(
  concat('does', 'this', 'work')
)


