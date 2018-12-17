
const p1 = new Promise((resolve, reject) => {
  resolve('hello');
}).then(res => res);

const p1 = new Promise((resolve, reject) => {
  throw new Error('报错');
}).then(res => res);

Promise.all([p1, p2])
.then(res => console.log(res))
.catch(e => console.log(e))

// Error : 报错
