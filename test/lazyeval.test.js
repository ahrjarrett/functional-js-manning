// from chapter 7 on shortcut fusion & lazy evaluation, page 192

const _ = require('lodash')
const R = require('ramda')

describe('lazy eval', () => {
  it('returns the correct length, indicating lazy eval', () => {
    const result = _.chain(_.range(200))
                    .map(x => x * x)
                    .filter(x => x % 2)
                    .take(3)
                    .value()

    result.length.should.eql(3)
  })
})


