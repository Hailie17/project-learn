// const arr = "123"; // 非字符串值
// const obj = JSON.parse(arr); // 报错：JSON.parse() 需要一个字符串作为参数
// console.log(obj);

// 金渡面试题讲解
// call的实现  ctx作用域对象
Function.prototype.mycall = function (ctx) {
  ctx = ctx || window;
  ctx.fn = this; //添加属性
  let arg = [...arguments].slice(1); //取参数
  let result = ctx.fn(...arg); //执行b()
  delete ctx.fn; //删除添加的属性
  return result;
};
var a = {
  name: "123",
  fn: function (a, b) {
    console.log(a + b);
  },
};
var b = a.fn;
b.mycall(a, 1, 2, 3);
console.log(b.mycall(a, 1, 2));
