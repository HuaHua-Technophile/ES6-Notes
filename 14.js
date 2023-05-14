// test.js
let name1 = "Jon"; // 导出一个变量
export default name1;
export let name2 = "张三"; // 导出一个变量
setTimeout(() => {
  name1 = "Tom";
  name2 = "李四"; // 改变这个变量的值
}, 1000);
export function sayHello() {
  // 导出一个函数
  console.log("Hello");
}
export class Person {
  // 导出一个类
  constructor(name) {
    this.name = name;
  }
}
