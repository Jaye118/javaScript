
function Mvvm (options = {}) {
    this.$options = options;
    let data = this._data = this.$options.data;

    IntersectionObserver(data);
}

function Observe (data) {
    // 所谓数据劫持就是给对象增加 get set
    // 把 data 属性通过 defineProperty 的方式定义属性
    for (let key in data) {
        let val = data[key];
        observe(val); // 递归向下找，实现深度劫持
        Object.defineProperty(data, key, {
            configurable: true,
            get () {
                return val;
            },
            set (newVal) {
                if (val === newVal) {
                    return
                }
                val = newVal;
                observe(newVal);
            }
        })
    }
}

function observe (data) {
    if (!data || typeof data !== 'object') {
        return new Observe(data); // Object.observe() 用来实时监测js中对象的变化，变化时调用一个方法。使用此方法，可以代替angular中的脏检查，可以大大的提高性能
    }
}