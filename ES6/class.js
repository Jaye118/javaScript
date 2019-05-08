
// ES6 class 写法
var Human = function (name) {
    this.name = name;
};
Human.prototype.sayHello = function () {
    console.log('hi');
}
class Developer extends Human {
    constructor (name) {
        super(name);
    }
}

var LeeroyJenkins = new Developer('xxxxxxxx');
console.log(LeeroyJenkins.name); // xxxxxxxx 



// ES5 转换
var Human = function (name) {
    this.name = name;
};
Human.prototype.sayHello = function () {
    console.log('hi');
}

var Developer = function (name) { // 创建Developer类 
    this._super.call(this, name); // 仅仅是在构造函数上设置属性。._super只是一个'假'超级的约定。.call(this, name)确保this在我们执行以下操作时设置新的上下文：
}
Developer.prototype = Onject.create(Human.prototype);
Developer.prototype.constructor = Developer; // 设置构造函数以Developer使其等于自己的原型
Developer.prototype._super = Human;

var LeeroyJenkins = new Developer('xxxxx');
console.log(LeeroyJenkins.name) // xxxxx


