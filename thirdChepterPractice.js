// Q 1 for given array with marks students - >[85,97,44,37,76,60] find avarage of entire class...

let studentsMarks = [85,97,44,37,76,60];

let total = 0;

for(let ele of studentsMarks){
    total+=ele;
}

console.log("Average Marks = ",(total/studentsMarks.length));

 /* Qs. For a given array with prices of 5 items -> [250, 645, 300, 900, 50]
 All items have an offer of 10% OFF on them. Change the array to store final price after
 applying offer. */

 let productPrice = [250,645,300,900,50];

 for(let index = 0 ; index<productPrice.length;index++){
    let offerPrice = productPrice[index] - (productPrice[index]*10/100);
    productPrice[index] = offerPrice;
 }

 for(let ele of productPrice){
    console.log(ele+"\n")
 }


 /* Qs. Create an array to store companies -> "Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"
a. Remove the first company from the array
b. Remove Uber & Add Ola in its place
c. Add Amazon at the end
*/

let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

console.log(companies);

companies.shift();
console.log(companies);

companies.splice(2,1,"Ola");
console.log(companies);

companies.push("Amazon");
console.log(companies);