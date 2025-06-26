/**
 * . Create a new button element. Give it a text "click me", background color of red & text color
of white.

Insert the button as the first element inside the body tag.
 */


let addButton1 = document.createElement("button");
addButton.innerText = "Click Me !!!";
addButton.style.backgroundColor = "red";
addButton.style.color = "white";
document.querySelector("body").prepend(addButton);

/**
 * Qs. Create a <p> tag in html, give it a class & some styling.
Now create a new class in CSS and try to append this class to the <p> element.
Did you notice, how you overwrite the class name when you add a new one?
Solve this problem using classList.
 */

let getP = document.querySelector("p");
getP.classList.add("new-style");


