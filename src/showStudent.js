// this function doesn't work without students DB

const R = require('ramda')

// findObject : DB -> String -> Object
const findObject = R.curry(function(db, id) {
  const obj = find(db, id)
  if(obj === null) {
    throw new Error('Object with ID [' + id '] not found')
  }
  return obj
})

// findStudent : String -> Student
const findStudent = findObject(DB('students'))

const csv = (student) =>
  `${student.ssn}, ${student.firstname}, ${student.lastname}`

// append : String -> String -> String
const append = R.curry(function(elementId, info) {
  document.querySelector(elementId).innerHTML = info
  return info
})

// showStudent : String -> Integer
const showStudent = R.compose(
  append('#student-info'),
  csv,
  findStudent,
  normalize,
  trim)

showStudent('123-45-6789')


