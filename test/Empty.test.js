const Empty = require('../src/Empty.monad')
const Wrapper = require('../src/Wrapper')

const empty = new Empty()
const wrap = (val) => new Wrapper(val)

const isEven = (n) => Number.isFinite(n) && (n % 2 === 0)
const half = (val) => isEven(val) ? wrap(val / 2) : empty()

describe('Empty monad:', () => {

  it('half should halve a number', () => {
    half(12).should.eql(6)
  })

  it('half should return empty for odd numbers', () => {
    half(13).should.eql(true)
  })
})

