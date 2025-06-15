// Arthmatic operators

let a = 5;
let b = 2;

console.log("a = " , a ," b = " , b);


console.log("a + b = ",a+b);
console.log("a - b = ",a-b);
console.log("a / b = ",a/b);
console.log("a * b = ",a*b);
console.log("a % b = ",a%b);

// increment and decriment operators

console.log("a = " , a ," b = " , b);


console.log("a = " , a);
console.log("++a = " , ++a);
console.log("a = " , a);
console.log("a++ = " , a++);
console.log("a = " , a);
console.log("--a = " , --a);
console.log("a = " , a);
console.log("a-- = " , a--);
console.log("a = " , a);

// comperison operator


console.log("a = " , a ," b = " , b);
console.log("a == b " , a == b);
console.log("a != b " , a != b);
console.log("a >= b " , a >= b);
console.log("a <= b " , a <= b);
console.log("a > b " , a > b);
console.log("a < b " , a < b);

// conditional operators

console.log("a = " , a ," b = " , b);

let con1 = a==b;
let con2 = a>b;

console.log("condition 1 ",a , " == " , b);
console.log("condition 2 ",a , " > " , b);

console.log("con1 && con 2 = ",con1&&con2);

console.log("con1 || con 2 = ",con1||con2);

console.log("!(con1) = ",!(con1));

// conditional statment

let theme = "Dark Mode"

let color;

if(theme == "Dark Mode"){
    color = "Black";
}
else if(theme == "Light Mode"){
    color = "Light";
}
else{
    alert("theme color is not specified...!");
}

console.log(color)


// Ternary operators

let age = 19

age > 18 ? console.log("Can vote") : console.log("Can't vote");
