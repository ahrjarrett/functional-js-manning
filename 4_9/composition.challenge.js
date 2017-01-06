const R = require('ramda')

const brothers = ['Alyosha', 'Ivan', 'Dmitri', 'Smerdyakov']
const grades = [81, 100, 72, 98]

/* challenge: find the student with
 * the highest grade in the class, using
/* zip, prop, sortBy, reverse, pluck, head */

// still a little confused about this one:
const smartestBrother = R.compose(
  R.head,
  R.pluck(0),
  R.reverse,
  R.sortBy(R.prop(1)),
  R.zip)

console.log(smartestBrother(brothers, grades))
