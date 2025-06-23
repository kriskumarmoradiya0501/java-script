// simple function

function myFunction(){
    console.log("Hi this is your first function in javascript");

}

myFunction();

//paramterize function 

function sum(number1,number2){
    console.log(number1+number2);
}

sum(10,20)

// parameterize function with return 

function multiply(number1,number2){
    return number1*number2;
}

let multiplication = multiply(10,20);

console.log(multiplication);

// arrow function with parameter

const arrowDiv = (a,b) =>{
    return a/b;
}

console.log(arrowDiv(10,2));

// arrow function without paramter

let arrowInfo = () => {
    console.log("Simple Arrow function");
}

console.log(arrowInfo);

// call back function

/*
is a function passed as an argument to another function
*/

let arr = [1,2,3,4,5];

arr.forEach(function printVal(val){
    console.log(val);
});

arr.forEach((val) => {
    console.log(val);
});

arr.forEach((val,idx,arr) => {
    console.log(val,idx,arr);
});

/**
 * Map Method :
 *              creates a new array with the results of some operation.
                The value its callback returns are used to form new array
 */

let newArr = arr.map((val)=>{
    return val*2;
});

console.log(newArr);

/**
 * Filter method :
 *                  Creates a new array of elements that give true for a conditio  / filter.
 *                  ex = all even numbers.
 */

let newEvenArray = arr.filter((val)=>{
    return val%2 == 0;
});

console.log(newEvenArray);

/**
 * Reduce method :
 *                  Performs some operations & reduces the array to a single value. It returns that sigle value.
 */

let sumArray = arr.reduce((result,current)=>{
    return result+current;
});

console.log(sumArray);

let largeNumber = arr.reduce((prev,current)=>{
    return prev > current ? prev : current;
});

console.log(largeNumber);

