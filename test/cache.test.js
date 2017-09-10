const cachedFn = require('../src/cache.js')

describe('memoization', () => {
  it('caches the result of previous function calls', () => {
    let cache = {}
    const square = x => x * x
    const result = cachedFn(cache, square, 5)

    cache.should.eql({ square5: 25 })
  })
})

