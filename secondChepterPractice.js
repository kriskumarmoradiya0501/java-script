// Q1 print all even number for 0 to 100.

for(let i = 0;i<=100;i++){
    if(i%2==0){
        console.log(i);
    }
}

/*
Q2. Create a game where you start with any random game number. Ask the user to keep 
guessing the game number until the user enters correct value.
*/

let num = Math.floor(Math.random() * 100) + 1;
let count = 0;

do {
    let gno = prompt("Enter your guessed number:");

    // Convert to number
    gno = Number(gno);

    if (isNaN(gno)) {
        alert("❌ Please enter a valid number!");
    } else if (gno < num) {
        alert("🔻 Your guessed number is too low. Try again!");
    } else if (gno > num) {
        alert("🔺 Your guessed number is too high. Try again!");
    } else {
        alert("🎉 You guessed the correct number! You win!");
        count = 1; // Exit the loop
    }
} while (count == 0);

let userName = prompt("Enter your User Name : ");

let newUserName = "@"+userName+userName.length;

alert("Your user name is "+newUserName);