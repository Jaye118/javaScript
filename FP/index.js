['john-reese', 'harold-finch', 'sameen-shaw']
// 转换成
[{name: 'John Reese'}, {name: 'Harold Finch'}, {name: 'Sameen Shaw'}]


// 方法：函数式编程
/*
  思考过程：
  1. 需要一个函数能实现 string 数组 到 object 数组的转换：convertNames
  2. 需要一个函数能实现 string -> object 的转换：convert2Obj
      需要两个函数完成：
        capitalizeName 把 名称 转换成 指定形式
          * 实现方式：几个方法的组合 split join capitalize
        genObj把任意类型转换成对象

  补充：
    柯里化 currying
    函数组合 compose
*/

const capitalize = x => x[0].toUpperCase() + x[1].toLowerCase() // 首字母大写

const genObj = curry((key, x) => {
  let obj = {};
  obj[key] = x;
  return obj;
})

const capitalizeName = compose(join(' '), map(capitalize), split('-'));
const convert2Obj = compose(genObj('name'), capitalizeName)
const convertNames = map(convert2Obj)

convertNames(['john-reese', 'harold-finch', 'sameen-shaw'])


// 示例: 假如页面有一个按钮button，我们需要求出用户点击了几次，但是一秒钟内重复点击的不算

// 过程式
var count = 0;
var rate = 1000;
var lastClick = Date.now() - rate;
var button = document.querySelector('button');

button.addEventListener('click', () => {
  if (Date.now() - lastClick >= rate) {
    console.log(`点击了${++count}次`);
    lastClick = Date.now();
  }
})

// 函数式：借鉴 Rx.js 中的处理
var button = document.querySelector('button');
Rx.Observable.fromEvent(button, 'click')
  .throttleTime(1000) // 每隔1000毫秒才能触发事件
  .scan(count => count + 1, 0) // 求值，默认值是0
  .subscribe(count => console.log(`点击了${++count}次`))
