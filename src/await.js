const timeOut = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const res = "jiangtengfei";
      console.log(res);
      resolve(res);
    }, 3000);
  });
};

/**
 * 方法一：不使用await,会先执行下面的代码
 * 结果：start >> end >> jiangtengfei
 */
// console.log("start");
// timeOut();
// console.log("end");

/**
 * 方法二：使用await，就是表示需要等待，异步代码同步执行
 * 结果：start >> jiangtengfei >> end
 */
const main = async () => {
  console.log("start");
  await timeOut();
  // const res = await timeOut();
  // console.log(res);
  console.log("end");
};

main();
