const R = require('ramda')
const Wrapper = require('../src/Wrapper.monad')
const wrap = (val) => new Wrapper(val)

describe('wrap:', () => {
  const wrappedValue = wrap('Prof Bros is pretty rad.')

  it('puts stuff in a box', () => {
    wrappedValue.map(R.identity).should.eql('Prof Bros is pretty rad.')
  })
})

describe('map:', () => {
  const wrappedValue = wrap('Prof Bros ARE pretty rad...')

  it('performs an operation on the stuff in the box', () => {
    wrappedValue.map(R.toUpper).should.eql('PROF BROS ARE PRETTY RAD...')
  })
})

describe('fmap:', () => {
  const plus = R.curry((a, b) => a + b)
  const plus3 = plus(3)
  const two = wrap(2)
  const five = two.fmap(plus3) //-> Wrapper(5)

  it('shares functionality of map with Wrapper instances', () => {
    five.map(R.identity).should.eql(5)
  })
})
