// promise基本用法
const promise = new Promise(function(resolve, reject){

  if (success) {
    resolve(value)
  } else {
    reject(error)
  }
})

//调用
promise.then(function(value){

}, function(error){

})

