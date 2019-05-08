import { resolve } from "url";

// 一次输出 1 2 3
(async function () {
    console.log(1);
    await new Promise(resolve => {
        setTimeout(() => {
            console.log(2);
            resolve();
        }, 1000)
    })
    console.log(3)
})