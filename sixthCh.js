//DOM Manipulation

let addButton = document.createElement("button");
addButton.innerText = "Add";

// Append  : Adds at gthe enfd of nofe(Inside)

let boxes = document.querySelectorAll(".box");
boxes[0].appendChild(addButton);


// Prepend : adds at the start od node

let clonedButton = addButton.cloneNode(true);
boxes[1].prepend(clonedButton);

// before: adds before the node(outside)

let clonedButton1 = addButton.cloneNode(true);
boxes[2].before(clonedButton1);

// after : adds after the node(outside)

let clonedButton2 = addButton.cloneNode(true);
boxes[2].after(clonedButton2);

let newHeading = document.createElement("h1");
newHeading.innerText = "New Heading";

document.querySelector("body").prepend(newHeading);

let unorderList = document.querySelector("ul");
unorderList.remove();
