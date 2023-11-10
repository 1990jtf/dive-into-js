/**
 * 本次参考资料
 * 链接：https://www.bilibili.com/video/BV1JN41147ob
 */

function fibonacci(n) {
  return n < 1 ? 0 : n <= 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2);
}

// 返回一个promise
const doFib = (iterations) =>
  new Promise((resolve, reject) => {
    const start = Date.now();
    const res = fibonacci(iterations);
    console.log(`doFib done in: ${Date.now() - start}ms`);
    resolve(res);
  });

const main = async () => {
  const start = Date.now();

  // 没有预期执行并发执行所有调度，它实际上是一个接一个的
  const values = await Promise.all([
    doFib(40),
    doFib(40),
    doFib(40),
    doFib(40),
    doFib(40),
    doFib(40),
    doFib(40),
    doFib(40),
    doFib(40),
    doFib(40),
  ]);

  console.log("values:", values);
  console.log(`fib done in ${Date.now() - start}ms`);
};

main().catch((e) => {
  console.error(e);
});


