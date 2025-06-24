// view html document in java script

/**
 * DOM : 
 *      when web oage is loaded, the browser creates a document object Model (DOM) of the page.
 * 
 *                              window
 *                              Document
 *                              html
 *              head                            body
 *      meta meta title link            div             script
 *                                 img h1 p div
 */

console.dir(document.body.childNodes[1]);
document.body
console.log(document.body);

// access by id

let heading = document.getElementById("heading");
console.dir(heading);
console.log(heading);


// access by class
let generalElements = document.getElementsByClassName("general");
console.dir(generalElements);
console.log(generalElements);

// access by tagName

let parahs = document.getElementsByTagName("p");
console.dir(parahs);
console.log(parahs);

/**
 * DOM Manipultion :
 *      Properties
 *          tagName: returns tag for element nodes
 *          innerText : returns the text content of the element and all its children
 *          innerHTML : returns the plain text or Html contents in the element
 *          textContent : returns textual content even for hidden elements
 */

console.log(heading.tagName);

let fruitsDiv = document.querySelector("#fruits");
console.dir(fruitsDiv);
console.log(fruitsDiv.innerText);
console.log(fruitsDiv.innerHTML);

fruitsDiv.innerHTML = "<h1>vegtable</h1><ul><li>tameta</li><li>kanda</li><li>lasan</li></ul>";

console.log(fruitsDiv.innerHTML);

