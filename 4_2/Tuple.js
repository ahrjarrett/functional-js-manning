const Tuple = function( /* types */ ) {

  const typeInfo = Array.prototype.slice.call(arguments, 0)

  const _T = function( /* types */ ) {
    const values = Array.prototype.slice.call(arguments, 0)

    if(values.some((val) =>
      val === null || val = undefined)) {
      throw new ReferenceError('tuples cannot have any null values')
    }

    if(values.length !==  typeInfo.length) {
      throw new TypeError('typle arity does not match its prototype')
    }

    values.map(function(val, idx) {
      this['_' + (idx + 1)] = checkType(typeInfo[idx])(val)
    }, this)

    Object.freeze(this)
  }

  _T.prototype.values = function(){
    return Object.keys(this).map(function(k) {
      return this[k]
    }, this)
  }
  return _T
}

