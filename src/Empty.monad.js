const Wrapper = require('./Wrapper.monad')
const wrap = new Wrapper()

const Empty = function(_) {
  ;
}

// map : (A -> B) -> A -> B
Empty.prototype.map = function() { return this }

// empty : _ -> Empty
const empty = () => new Empty()

module.exports = Empty
