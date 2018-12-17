
// 实现ajax操作
var getJSON = function(url){
    var promise = new Promise(function(resolve,reject){
        var client = new XMLHttpRequest();
        client.open('GET',url);
        client.onreadystatechange = handler;
        client.respnseType = 'json';
        client.setRequestHeader("Accept","appliction/json");
        client.send();

        function handler(){
          // readyState 0=>初始化 1=>载入 2=>载入完成 3=>解析 4=>完成
            if(this.readyState !== 4){ 
                return
            }
            if(this.status == 200){
                resolve(this.response)
            } else {
                reject(new Error(this.statusText))
            }
        }
    })
    return promise;
}

getJSON("/post.json").then(function(json){
    console.log('Contents:'+json)
},function(error){
    console.error(err)
})
// getJSON 是对XMLHttpRequest对象的封装