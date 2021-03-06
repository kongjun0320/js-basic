# JavaScript This 问题

与其他语言相比，函数的 `this` 关键字在 `JavaScript` 中的表现略有不同，此外，在严格模式和非严格模式之间会有一些差别。

在绝大多数情况下，函数的调用方式决定了 `this` 的值（运行时绑定）。`this`不能在执行期间被赋值，并且在每次函数被调用时 `this` 的值也可能会不同。ES5 引入了 `bind`方法来设置函数的 `this` 值，而不用考虑函数如何被调用的。ES2015 引入的箭头函数，箭头函数不提供自身的 this 绑定 (this 的值将保持为闭合词法上下文的值)。

# 描述

1. 全局上下文
   无论是否在严格模式下，在全局执行环境中（在任何函数体外部）`this` 都指向全局对象。

```js
console.log(this === window) // true
```

2. 类上下文

`this` 在类的表现与在函数中类似，因为类本质也是函数，但也有一些区别和注意事项。

在类的构造函数中，`this`是一个常规对象。类中所有非静态方法都会被添加到`this`的原型中

# `bind`方法

ECMAScript5 引入了 `Function.prototype.bind()`。调用`f.bind(someObject)`会创建一个与`f`具有相同函数体和作用域的函数，但是在这个新函数中，`this`将永久地被绑定到了`bind`的第一个参数，无论这个函数是如何被调用的。

# 箭头函数

在箭头函数中，`this`与封闭词法环境的`this`保持一致。在全局代码中，它将被设置为全局对象:
