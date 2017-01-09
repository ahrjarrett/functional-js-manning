// naive implementation of compose

// compose : Function -> Function?
function compose(/* fns */) {
  let args = arguments
  let start = args.length - 1

  /* compose’s output is another fn that’s
   * called on the actual arguments */
  return function () {
    let i = start
    let result = args[start].apply(this, arguments)

    /* iteratively invokes the subsequent fns
     * based on the previous return value */
    while (i--)
      result = args[i].call(this, result)

    return result
  }
}

module.exports = compose
