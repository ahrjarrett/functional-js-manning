const R = require('ramda')

const str = `It is the hour to be drunken! to escape being the martyred slaves of time, be ceaselessly drunk. On wine, on poetry, or on virtue, as you wish.`

// explode : String -> Array
const explode = (str) => str.split(/\s+/)

// count : Array -> Number
const count = (arr) => arr.length

// uses R.compose to combine 2 pure functions
const countWords = R.compose(count, explode)

console.log(countWords(str)) //-> 28
