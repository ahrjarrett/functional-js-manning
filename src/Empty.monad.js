const Wrapper = require('./Wrapper')
const wrap = new Wrapper()


const Empty = function(_) {
  ;
}

// map : (A -> B) -> A -> B
Empty.prototype.map = function() { return this }

// empty : _ -> Empty
const empty = () => new Empty()

module.exports = Empty


const isEven = (n) => Number.isFinite(n) && (n % 2 === 0)
const half = (val) => isEven(val) ? wrap(val / 2) : empty()

describe('Empty monad', () => {
  it('half should halve a number', () => {
    half(12).should.eql(6)
  })
  it('half should return empty for odd numbers', () => {
    half(13).should.eql(true)
  })
})
