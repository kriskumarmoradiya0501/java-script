/**
 * async await >> promise chains >> callback hell
 */

/**
 * Sync in JS :
 *      Synchronous : 
 *                  Synchronous means the code runs in particular sequence of instructions given in the program.
 *                  Each instruction waits for the previous instruction to complete its execution.
 *       
 *      Asynchronous :
 *                  Due to sychronous programming, sometimes imp instructions get 
 *                  blocked due to some prevous insructions, which causes a delay in the UI.
 *                  Asynchronous code execution allows to execute next instructions
 *                  immediately and doesn't block the flow.
 */

console.log('one');
console.log('two');

setTimeout(()=>{
    console.log('three');
},2000)

let hello = () =>{
    console.log('hello');
};


console.log('four');

setTimeout(hello,1000);
console.log('five');

/**
 * Callbacks : 
 *          A callback is a function passed as an argument to another function.
 */

function sum(a,b){
    console.log(a+b);
}

function calculator(a,b,sumCallback){
    sumCallback(a,b);
}

calculator(10,20,sum);

/**
 * Callback Hell : 
 *              Nested callbacks stacked below one another forming a pyramid structure. (Pyramid of Doom)
 *              This style of programming becomes difficult to understand & manage.
 */

for (let i = 0; i < 5; i++) {
    let str = "";
    for(let j = 0;j<5;j++){
        str += "*";
        console.log(str)
    }
    console.log("\n");
}

function getData(dataId,getNextData){
    setTimeout(()=>{
        console.log(dataId);
        if(getNextData){
            getNextData();
        }
    },2000)    
}

getData(1,()=>{
    getData(2,()=>{
        getData(3);
    });    
});

/**
 * Promises : 
 *          Promise is for "eventual" completion of task.. It is an object in JS.
 *          It is a solution to callback hell.
 *          
 *          let promise = new Promise((resolve,reject)=>{...})
 *                                      Function with 2 handlers
 *          
 *      Note : resokve& reject are callbacks provided by JS.
 */

let promise = new Promise((resolve,reject)=>{  
    console.log("I am promise");
    resolve("sucess");
    reject("failed");
});

function getData1(dataId,getNextData){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(dataId);
            resolve("sucess");
        if(getNextData){
            getData1(1)
            .then(() => getData1(2))
            .then(() => getData1(3));
        }
        },2000);
    });
}


/**
 * Promises : 
 *          A Java Script Promise object can be : 
 *              Pending : the result is undefined
 *              Resolved :  the result is a value (fulfilled)   resolve(result)
 *              Rejected : the result is an error object        reject (error)
 *          
 *          NOte : Promise has state (pending, fulfilled) & some
 *                  result (result for resolve & erroe for reject).
 *          
 */

/**
 * Promises : 
 *          .then()&.catch() :
 *                  promise.then((res) => {...})
 *                  promise.catch((err) => {...})
 *          
 */

const getPromise = () =>{
    return new Promise((resolve,reject)=>{
        console.log("Promise created");
        reject("network error");
    });
};


let promise1 = getPromise();
promise.then((res)=>{
    console.log("Promise fulfiled");
});

promise.catch((err)=>{
    console.log("rejected",err);
});


/**
 * Async - Await:
 *              async function always returns a promise.
 *              async cunction myFunction(){...}
 * 
 *              await pauses the execution of its surrounding async function until the promise is settled.
 */

async function hello1() {
    console.log("hello");
}

function api(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("weather data");
            resolve(200);
        },10000);
    });
}
async function getData2(){
await api();
}
getData2();

function getData3(dataId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(dataId);
            resolve("sucess");
        },2000);
    });
}

async function getAllData(){
    console.log("loading data1 ...");
    await getData3(1);
    console.log("loading data2 ...");   
    await getData3(2);
    console.log("loading data3 ...");
    await getData3(3);
}
getAllData();

