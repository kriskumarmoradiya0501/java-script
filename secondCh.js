// for loop 

for(let i = 0;i < 10 ; i++){
    console.log(i);
}

// print table using for loop
let table = prompt("Enter number which you want to print table");

if (isNaN(table)){
    alert("Invalide input..!");
}
else{
    for(let i = 1;i <=10;i++){
        console.log(table," * ",i," = ",table*i);
    }
}

// while loop
let i = 0;
while(i <=10){
    console.log(i);
    i++;
}

// do while loop

let n = 11;

do{
    console.log(n);
    n++;
}while(n<=10);

// for of loop

let name  = "Kriskumar moradiya";

for(let alpha of name){
    console.log(alpha);
}

// for in loop

let product1={
    name : "justin",
    proffetion : "singer",
    age : "24",
    height : 158.60,
    weight : 78
};

for(let key in product1){
    console.log(key,product1[key]);
}

// literals consider product 1 

let op ="Name of product is ${product1.name}.\n proffetion is ${product1.proffetion}. \n \t age is ${product1.age} "; 

console.log(op);

// string methods

let employee = "Jay Swaminarayan";
console.log(employee.toUpperCase);
console.log(employee.toLowerCase);
console.log(employee.trim);
console.log(employee.concat("S","a"));
console.log(employee.replace("Jay","Jay shree"));
console.log(employee.charAt(10));

