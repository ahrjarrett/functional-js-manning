const fork = require('../src/fork')
const R = require('ramda')

const toLetterGrade = function(grade) {
  if (grade >= 90) return 'A'
  if (grade >= 80) return 'B'
  if (grade >= 70) return 'C'
  if (grade >= 60) return 'D'
  return 'F'
}

const computeAvgGrade =
  R.compose(
    fork(
      R.divide,
      R.sum,
      R.length
    )
  )

describe('fork function:', () => {
  it('should find the average when joining', () => {
    computeAvgGrade([92, 89, 95]).should.eql(92)
  })

  it('should be agnostic w/r/t arguments', () => {
    // good example of a use for R.identity:
    const timesTwo = fork((x) => x + x, R.identity, R.identity)
    timesTwo(6).should.eql(12)
  })
})

describe('toLetterGrade:', () => {
  it('should correctly return letter grade when passed a Number', () => {
    toLetterGrade('58').should.eql('F')
    toLetterGrade('83').should.eql('B')
    toLetterGrade('-100').should.eql('F')
  })
})


