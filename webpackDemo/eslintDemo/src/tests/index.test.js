import {
    fab
} from "../js/index"
test('fab 3', () => { //测试用例
    expect(fab(3)).toBe(2); //测试项
    //常见的断言
    //.not 测试结果不等于某个值的情况
    //.toEqual()  递归的检查对象所有属性和属性值是否相等
    //.toHaveLength可以很方便的用来测试字符串和数组类型的长度是否满足预期。
    //.toThorw可能够让我们测试被测试方法是否按照预期抛出异常
    //.toMatch传入一个正则表达式，它允许我们用来进行字符串类型的正则匹配
    //
})