// from chapter 7, pages 191-2

const R = require('ramda')

function cachedFn(cache, fn, args) {
  const key = fn.name + JSON.stringify(args)

  if(R.contains(cache, key)) {
    return get(cache, key)
  }
  else {
    let result = fn(args)
    // SIDE EFFECT:
    cache[key] = result
    return result
  }
}

let cache = {}

module.exports = cachedFn
