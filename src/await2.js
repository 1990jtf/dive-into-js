// 异步
const test1 = () => new Promise((resolve, reject) =>{
    setTimeout(()=>{
        const res = 'jiangtengfei';
        console.log(res);
        resolve(res);
    },3000)
});

const test2 = () => new Promise((resolve, reject) =>{
    setTimeout(()=>{
        const res = 'fuxuan';
        console.log(res);
        resolve(res);
    },1000)
});

async function main(){
    await test1();
    await test2();
}

main();  // jiangtengfei fuxuan