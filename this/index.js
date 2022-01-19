// console.log(globalThis) // 获取全局对象

const obj1 = { a: 1 }
const obj2 = { a: 2 }

function fn() {
  console.log(this.a)
}

fn.bind(obj2)()

// const newFn = fn.bind(obj1)
