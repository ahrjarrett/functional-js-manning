const R = require('ramda')
const Wrapper = require('./Wrapper')
const wrap = (val) => new Wrapper(val)


// testing...
const wrappedValue = wrap('Prof Bros is pretty rad.')
console.log(wrappedValue.map(R.identity)) //-> 'Prof Bros is pretty rad.'
wrappedValue.map(console.log) //-> 'Prof Bros is pretty rad.'
// notice how the two above are A -> B, then B -> A

console.log(wrappedValue.map(R.toUpper)) //-> 'PROS BROS IS PRETTY RAD.'


// moar tests:
const plus = R.curry((a, b) => a + b)
const plus3 = plus(3)

const two = wrap(2)
const five = two.fmap(plus3) //-> Wrapper(5)
console.log(five.map(R.identity)) //-> 5


