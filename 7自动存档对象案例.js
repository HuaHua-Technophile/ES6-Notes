// 创建一个自存档对象的构造函数
function Archiver() {
  // 定义一个私有的archive数组，用来存储属性的历史值
  let archive = [];
  // 定义一个temperature属性，使用Object.defineProperty方法
  Object.defineProperty(this, 'temperature', {
    // 定义一个getter，返回当前的temperature值
    get: function () {
      console.log('get!');
      return temperature;
    },
    // 定义一个setter，当设置temperature值时，同时将其存入archive数组
    set: function (value) {
      console.log('set!');
      temperature = value;
      archive.push({ val: temperature });
    },
  });
  // 定义一个getArchive方法，返回archive数组
  this.getArchive = function () {
    return archive;
  };
}

// 创建一个自存档对象的实例
let arc = new Archiver();
// 设置temperature属性的值
arc.temperature = 11;
arc.temperature = 13;
// 获取temperature属性的值
console.log(arc.temperature); // get! 13
// 获取archive数组
console.log(arc.getArchive()); // [{ val: 11 }, { val: 13 }]
