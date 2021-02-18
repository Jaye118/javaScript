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
