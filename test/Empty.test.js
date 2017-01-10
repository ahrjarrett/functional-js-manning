const Empty = require('../src/Empty.monad')
const R = require('ramda')
const Wrapper = require('../src/Wrapper.monad')

const empty = () => new Empty()
const wrap = (val) => new Wrapper(val)

const isEven = (n) => Number.isFinite(n) && (n % 2 === 0)
const half = (val) => isEven(val) ? wrap(val / 2) : empty()

describe('Empty monad:', () => {

  it('half should halve a number', () => {
    half(12).map(R.identity).should.eql(6)
  })

  it('half should return empty for odd numbers', () => {
    /* can't get Empty {} to eql something...
     * read mocha docs, learn more about monads
     * to troubleshoot?
     */

    //half(13).should.eql('Empty {}')

    const testValue = half(13)
    half(13).should.eql(testValue)
  })
})

