class Counters {
  constructor(public count: number = 0) {}
  public add(value: number) {
    this.count += value;
    return this; // 用于实现链式调用的效果
  }
  public substract(value: number) {
    this.count -= value;
    return this;
  }
}
let counters = new Counters(10);
counters.add(3).substract(2);

class PowContenr extends Counters {
  constructor(public count: number = 0) {
    super(count);
  }
  public pow(value: number) {
    this.count = this.count ** value;
    return this;
  }
}
let powCounter = new PowContenr(2);
powCounter.pow(3).add(5);
console.log(powCounter);
