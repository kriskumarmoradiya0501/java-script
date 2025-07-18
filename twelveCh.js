/**
 * Fetch API (Application programming Inteface) : 
 *          The Fetch API provuides an interface for fetching (sending / receinving) resources.
 *          It uses Request and Response objects.
 *          The fetch() method is used to fetch a resource (data).
 *          
 *          let promise = fetch(url,[options])
 */

const URL = "https://jsonplaceholder.typicode.com/users";

const getFacts = async () => {  
    console.log("getting data..");
    let Response = await fetch(URL);
    console.log(Response);
}

getFacts();

/**
 * Undestanding Terms : 
 *                     AJAX is ANsychronous JS & XML
 *                     JSON is JavaScript Object Notation
 *                     json() method : returns a second promise that resolves with the result of parsing the respons body text as JSON.
 *                                      (Input is JSON, output is JS object)
 */

let email = document.querySelector("#email");
let btn = document.querySelector("#getData");

const getFacts2 = async () => {  
    console.log("getting data..");
    let Response = await fetch(URL);
    console.log(Response);
    let data = await Response.json();
    console.log(data);
    email.innerText = data[0].email;
}

btn.addEventListener("click",getFacts2);

function getName(){
    fetch(URL)
    .then((Response)=>{
        return Response.json();
    })
    .then((data)=>{
        console.log(data);
    });
}

btn.addEventListener("click",getName);


/**
 * Requests & Response : 
 *                      HTTP Verbs
 *                      Response Status Code
 *                  Note : HTTp response headers also contain details about the respomses,
 *                         such as content type, HTTP status code etc.
 */

/**
 * Homework Task :
 *              Sending POST Request.
 */



