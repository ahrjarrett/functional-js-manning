// const Either = require('Either.monad')

/*

 * todo:
 * - curry these functions and rewrite their function signatures,
 * - add these fns to exports object

 */

// validLength : Number, String -> Boolean
const validLength = (len, str) => str.length === len

// checkLengthSsn : String -> Either(String)
const checkLengthSsn = function(ssn) {
  return Either.of(ssn).filter(_.bind(validLength, undefined, 0))
    .getOrElseThrow(`Input: ${ssn} is not a valid SSN number`)
}

// console.log(Either)
