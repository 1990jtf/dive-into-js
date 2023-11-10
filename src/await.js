const timeOut = () => {
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const res = "jiangtengfei";
      console.log(res);
      resolve(res);
    }, 3000);
  });
};

// 如果timeOut不写await，会先执行下面的代码
// console.log("start");
// timeOut();
// console.log("end");

// 如果写await，就是表示需要等待，异步代码同步执行
const main = async () => {
  console.log("start");
  await timeOut();
  console.log("end");
};

main();
