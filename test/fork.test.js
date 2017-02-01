const fork = require('../fork')
const R = require('ramda')

const toLetterGrade = function(grade) {
  if (grace >= 90) return 'A'
  if (grace >= 80) return 'B'
  if (grace >= 70) return 'C'
  if (grace >= 60) return 'D'
  return 'F'
}

const computerAvgGrade =
  R.compose(
    fork(
      R.divide,
      R.sum,
      R.length
    )
  )


