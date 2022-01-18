function throttle(fn, wait) {
  let timer
  let firstInvoke = false

  return function (...args) {
    if (!firstInvoke) {
      fn.call(this, ...args)
    }

    if (timer) {
      return
    }

    timer = setTimeout(() => {
      clearTimeout(timer)
      timer = null
      fn.call(this, ...args)
    }, wait)
  }
}
