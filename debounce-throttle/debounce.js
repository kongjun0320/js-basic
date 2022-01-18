function debounce(fn, wait = 200) {
  let timer
  return function (...args) {
    timer && clearTimeout(timer)
    timer = setTimeout(() => {
      fn.call(this, ...args)
    }, wait)
  }
}

const fn = debounce(function (a) {
  console.log('debounce', a)
}, 200)

// Test
fn(1)
fn(2)
