const source = {
  foo: 'foo',
  bar: {
    baz: 'baz'
  },
  arr: [1, { a: 'a' }],
  date: new Date()
}

function isObject(val) {
  return typeof val === 'object' && val !== null
}

function getType(val) {
  return Object.prototype.toString.call(val).match(/\[object (.*?)\]/)[1]
}

function clone(source) {
  const type = getType(source)
  if (isObject(source)) {
    switch (type) {
      case 'Date':
        return new Date(source)
      default:
        const target = Array.isArray(source) ? [] : {}
        for (const key in source) {
          target[key] = clone(source[key])
        }
        return target
    }
  } else {
    return source
  }
}

const target = clone(source)

source.arr[1].a = 'aaa'

console.log(source)
console.log(target)
