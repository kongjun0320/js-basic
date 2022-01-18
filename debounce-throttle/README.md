# Debouncing & Throttling

**防抖和节流都是用来控制某个函数在一定时间内执行多少次的技巧。**

当我们给 DOM 绑定事件的时候，加了防抖和节流函数特别有用。为什么呢？因为我们在事件和函数之前加了一个控制层。记住，我们是无法控制 DOM 事件触发频率的。

## 防抖(Debounce)

防抖技术可以把多个顺序地调用合并成一次

假想一下，你在电梯中，门快要关了，突然有人要上来。电梯并没有改变楼层，而是再次打开电梯门。电梯延迟了改变楼层的功能，但是优化了资源。

点击按钮示例，**请查看示例一**。你可以看到连续快速的事件是如何被一个`debounce`事件代替的。

### debounce 实现

```js
function debounce(fn, wait = 200) {
  let timer
  return function (...args) {
    timer && clearTimeout(timer)
    timer = setTimeout(() => {
      fn.call(this, ...args)
    }, wait)
  }
}
```

### debounce 实例

- 调整大小的例子

调整桌面浏览器窗口大小的时候，会触发很多次`resize`事件。

- 基于 Ajax 请求自动完成功能

当用户停止输入的时候，再发送请求。

## 节流(Throttle)

使用`_.throttle`的时候，只允许一个函数在 X 毫秒内执行一次。
跟`debounce`主要的不同在于，`throttle`保证 X 毫秒内执行一次。

### 节流实例

- 无限滚动

用户向下无限滚动页面，需要检查滚动位置距离底部多远，如果临近底部了，我们可以发送 AJAX 请求获取更多的数据插入到页面。
在此场景下，我们心爱的`debounce`就不适用了，只有当用户停止滚动的时候它才会触发。只要用户滚动临近底部附近时，我们就想获取内容。

**请查看示例四**

### 节流实现

```js
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
```
