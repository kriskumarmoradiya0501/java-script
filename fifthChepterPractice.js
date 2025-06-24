/**
 * Qs. Create a H2 heading element with text - "Hello JavaScript". Append "from Apna College
    students" to this text using JS.
 */

    let appendH2 = document.querySelector("h2");
    console.dir(appendH2);
    appendH2.innerText +=" from Apana College";
    console.log(appendH2);


/**
 * Qs. Create 3 divs with common class name - "box". Access them & add some unian
    of them.
 */

    let divBox = document.querySelectorAll(".box");
    console.dir(divBox);
    divBox[0].style.backgroundColor = "red";
    divBox[1].style.backgroundColor = "blue";
    divBox[2].style.backgroundColor = "green";
    console.log(divBox);    
    divBox[0].innerText+="After change ";
    divBox[1].innerText+="After change ";
    divBox[2].innerText+="After change ";
    console.log(divBox);
    divBox[0].style.color = "white";
    divBox[1].style.color = "white";
    divBox[2].style.color = "white";



