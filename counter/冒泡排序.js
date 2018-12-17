
// 冒泡排序
function bubbleSort(arr) {
    var length = arr.length;
    for (let i = 0; i < length; i++) {
        for (j = i + 1; j < length; j++) {
            if (arr[i] > arr[j]) {
                [arr[i], arr[j]] = [arr[j], arr[i]]
            }
        }
    }
    return arr
}

bubbleSort([1, 4, 3, 2, 6])

// 选择排序
function selectSort(arr) {
    var length = arr.length;
    var min = 0;
    for (let i = 0; i < length; i++) { 
        min = i; // 外循环负责将内循环找出的最小元素放到有序的位置上
        for (let j = i + 1; j < length; j++) { // 内循环负责找出最小元素的下标
            if (arr[min] > arr[j]) {
                min = j
            }
        }
        [ary[i], ary[min]] = [ary[min], ary[i]];
    }
}


// 选择排序与冒泡排序的区别在于：
// 冒泡排序每次发现有更小元素就立即交换到序列首位，
// 而选择排序发现有更小元素时，只是记录其下标，等到内层循环完之后，在将最小元素交换到首位。