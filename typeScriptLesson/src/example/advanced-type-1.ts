// 高级类型
// 交叉类型&：取多个类型的并集
const mergeFunc = <T, U>(arg1: T, arg2: U): T & U => {
  let res = {} as T & U;
  res = Object.assign(arg1, arg2);
  return res; // 返回值需同时包含两个参数的所有类型
};
// mergeFunc({ a: "a" }, { b: "b" });

// 联合类型：符合定义的任意一种类型
const getLengthFunc = (content: string | number): number => {
  if (typeof content === "string") {
    return content.length;
  } else {
    return content.toString().length;
  }
};
// console.log(getLengthFunc("a"));

// 类型保护
const valueList = [123, "abc"];
const getRandomValue = () => {
  const number = Math.random() * 10;
  if (number < 5) {
    return valueList[0];
  } else {
    return valueList[1];
  }
};

// 定义类型保护  is
function isString(value: number | string): value is string {
  return typeof value === "string";
}
// 等同于typeof value === "string"   只能使用===或者!==进行类型保护
// 比较的类型必须是string/number/boolean/symbol中的一种
// instanceof也可以用于类型保护的效果
const item = getRandomValue();
// if (isString(item)) {
//   console.log(item.length);
// } else {
//   console.log(item.toFixed());
// }
class CreateByClass1 {
  public age = 18; // 定义的变量会被携带在实例上
  constructor() {}
}
class CreateByClass2 {
  public name = "lison";
  constructor() {}
}
function getRandomItem() {
  return Math.random() < 0.4 ? new CreateByClass1() : new CreateByClass2();
}
// const item1 = getRandomItem();
// if (item1 instanceof CreateByClass1) {
//   console.log(item1.age);
// } else {
//   console.log(item1.name);
// }

// null/undefined  null和undefined是任何类型的子类型

let values = 123;
// values = undefined; // 3.7版本已经废除自动转换成xxx|undefind联合类型的功能
// string|undefined/string|null/string|undefined|null是三种完全不同的联合类型
// ts自动将可选属性自动转换成xxx|undefined联合类型
const sumFunc = (x: number, y?: number): number => {
  return x + (y || 0);
};
