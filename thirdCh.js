// array

let studentsName = ["jay","viru","lalit","carry","minati","nishchay","abhishek","rajat","elvish","raosahab"];

let marks = [50,80,60,70,85,84,93,94,98,99,100];

console.log("Name \t\t Marks");

// how to print array
for(let index = 0 ; index<studentsName.length;index++){
    console.log(studentsName[index]+"\t\t\t"+marks[index]);
}

// push opration in array which add elements from end or array

studentsName.push("ram","lakshaman");
marks.push(99,100);

for(let index = 0 ; index<studentsName.length;index++){
    console.log(studentsName[index]+"\t\t\t"+marks[index]);
}

// pop opration in array which delete the last index elements and return it

marks.pop();
studentsName.pop();

for(let index = 0 ; index<studentsName.length;index++){
    console.log(studentsName[index]+"\t\t\t"+marks[index]);
}

// tostring opration gives array in string formate
console.log(studentsName.toString());
console.log(marks.toString())

// concat opration helps to marge two or more arrays
let studentsMarksAndName = studentsName.concat(marks);
console.log(studentsMarksAndName.toString());

//unshift opration is used to add elements from start of array
studentsName.unshift("Ravan");
marks.unshift(100);

console.log(studentsName.toString());
console.log(marks.toString());

//shift opration is used to delete elements from start of array
studentsName.shift();
marks.shift();

console.log(studentsName.toString());
console.log(marks.toString());

//slice it use to give a specific slice of array by index
console.log(studentsName.slice(2,5));
console.log(marks.slice(2,5));

//splice is use to add delete and replace elements
console.log(studentsName.splice(2,2,"chhagan","magan"));
console.log(marks.splice(2,2,80,90));

console.log(studentsName);
console.log(marks);


