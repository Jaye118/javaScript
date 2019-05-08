
function Mvvm () {
    // 编译
    new Complie(options.el, this);
}

function Complie(el, vm) {

    // 将el挂载到实例上方便调用
    vm.$el = document.querySelector(el);
    // 在el范围里将内容都拿到，当然不能一个一个的拿
    // 可以选择移到内存中去然后放入文档碎片中，节省开销
    let fragment = document.createDocumentFragment();

    while (child = vm.$el.firstChild) {
        fragment.appendChild(child); // 此时将el中的内容放入内存中
    }

    // 对el里面的内容进行替换
    function replace (frag) {
        Array.from(frag.childNodes).forEach(node => {
            let txt = node.textContent;
            let reg = /\{\{(.*?)\}\}/g; // 正则匹配 {{}}

            if (node.nodeType === 3 && reg.test(test)) { // node.nodeType === 3 文本节点  1 元素节点 2 属性节点 8 注释节点
                let arr = RegExp.$1.split('.');
                let val = vm;
                arr.forEach(key => {
                    val = val[key]
                })
                // trim 去除首尾空格
                node.textContent = txt.replace(reg, val).trim();
            }

            // 如果还有子节点，继续递归replace
            if (node.childNodes && node.childNodes.length) {
                replace(node)
            }
        })
    }

    replace(fragment) // 替换内容
    vm.$elappendChild(fragment) // 再将文档碎片放入el中
}