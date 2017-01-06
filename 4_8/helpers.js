/* todo:
 * 1 - add these fns to the exports object.
 * 2 - add types to checkLengthSsn tag
 * note: these are meant to be reused! */

const _ = require('lodash')
const R = require('ramda')

// trim : String -> String
const trim = (str) => str.replace(/^\s*|\s*$/g, '')
// normalize : String -> String
const normalize = (str) => str.replace(/\-/g, '')
// validLength : Number, String -> Bool
const validLength = (param, str) => str.length === param
// checkLengthSsn: configures validLength with parameter of 9
const checkLengthSsn = _.partial(validLength, 9)

// let’s glue together some more functions:
const cleanInput = R.compose(normalize, trim)
const isValidSsn = R.compose (checkLengthSsn, cleanInput)

// making sure the composition works:
const test = R.compose(checkLengthSsn, trim, normalize)
console.log(test('  987-65-4321 ')) //-> true
console.log(test('  r*987-65-4321 ')) //-> false

// making sure our glue stuck:
console.log(cleanInput(' 123-45-6789 ')) //-> '123456789'
console.log(isValidSsn(' 123-45-6789 ')) //-> true
