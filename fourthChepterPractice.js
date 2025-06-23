/*
Qs. Create a function using the "function" keyword that takes a String as an argument &
returns the number of vowels in the string.
*/

function vowelCount(str){
    let count = 0;
    for(let ele of str){
        console.log(ele);
        if(ele == 'a' || ele == 'A' || ele == 'e' || ele == 'E' || ele == 'i' || ele == 'I' || ele == 'o' || ele == 'O' || ele == 'u' || ele == 'U' ){
            count++;
        }
    }
    return count;
}

console.log(vowelCount("jenfiwjkmdwoecm"));

/*
Qs. Create an arrow function to perform the same task.
*/

const vowelsCounter = (str) => {
    let count = 0;
    for(let ele of str){
        if(ele == 'a' || ele == 'A' || ele == 'e' || ele == 'E' || ele == 'i' || ele == 'I' || ele == 'o' || ele == 'O' || ele == 'u' || ele == 'U' ){
            count++;
        }
    }
    return count;
}

console.log(vowelsCounter("isdnbcjsdjdncuno asdjxxmkoakocjsc"));

/**

Qs. For a given array of numbers, print the square of each value using the forEach loop.

*/

let array = [1,2,3,4,5];

array.forEach((val) => {
    console.log(val*val);
});


/**
 * Qs. We are given array of marks of students. Filter our of the marks of students that scored 90+.
 */

let studentsMarks = [15,89,95,25,63,45,88,65,95,35,96,78,52];

let filteredMarks = studentsMarks.filter((val) => {
    return val >= 90;
});

console.log(filteredMarks);


/**
 * Qs. Take a number n as input from user. Create an array of numbers from 1 to n.
    Use the reduce method to calculate sum of all numbers in the array.
    Use the reduce method to calculate product of all numbers in the array.
 */

    let userNumber = prompt("Enter a number : ");

    let arrayOfNumber = [];

    for(let i=1;i<=userNumber;i++){
        arrayOfNumber.push(i);
    }   

    console.log(arrayOfNumber);

let sumOfArray  =  arrayOfNumber.reduce((result,current)=>{
        return result+current;
    });

console.log(sumOfArray);

let productOfArray =    arrayOfNumber.reduce((result,current)=>{
        return result*current;
    });

console.log(productOfArray);