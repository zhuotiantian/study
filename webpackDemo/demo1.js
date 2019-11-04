let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
//total:上一次函数执行完毕的返回值
//currentValue：当前值
//currentIndex：当前索引
//arr：当前数组
let result = arr1.reduce(function (total, currentValue, currentIndex, arr) {
    return total + currentValue;
}, 10);
//如果没有提供initialValue，reduce 会从索引1的地方开始执行 callback 方法，跳过第一个索引。如果提供initialValue，从索引0开始