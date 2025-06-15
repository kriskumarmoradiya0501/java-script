// Q1. Get user to input a number using prompt("Enter a number:"). Check if the number is a multiple of 5 or not.

let number = prompt("Hello Enter number to check that it is divided by 5  or not");

if(number % 5 == 0){
    alert(number +" is divisible by 5.");
    console.log(number," is divisible by 5.");
}
else{
    alert(number +" is not divisible by 5.");
    console.log(number," is not divisible by 5.");
}

/*
Qs2. Write a code which can give grades to students according to their scores:
80-100, A
70-89, B
60-69, C
50-59, D
0-49, F
*/

let score = prompt("Hello Student, enter your score : ");

if(score >= 80 && score<=100){
    alert("You got A Grade");
}
else if(score >=70 && score<=89){
    alert("You got B Grade");
}
else if(score >=60 && score<=69){
    alert("You got C Grade");

}
else if(score >=50 && score<=59){
    alert("You got D Grade");
}
else if(score >=0 && score<=49){
    alert("You got F Grade");
}
else{
    alert("Invalide input...!")
}