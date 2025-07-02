/**
 * Q 1 : You are creating a website for Your College. Create a class User with 2 properties,name & emial.
 *       It also has a method called viweData() that allows user to view website data.
 */

let data = "website data";

class User{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }

    viewData(){
        console.log("Data = ",data);
        console.log(this.name);
        console.log(this.email);
    }
}

let student = new User("Kris","Moradiya");
let student1 = new User("Jay shree ","Ram");
student1.viewData();
student.viewData();

/**
 * Q 2 : Create a new clas called Admin which inherits form User. Add a new method called 
 *       editData to Admin that allows it to edit website data.
 */

class Admin extends User{
    constructor(name, email){
        super(name, email);
    }

    editData(){
        data = "new web data";
    }
}

let editData = new Admin("Jay shree ","Krishna");
editData.editData();
editData.viewData();

/**
 * Error Handaling :
 *                  try-catch:
 *                          try {
 *                              normal code
 *                          }catch(err){//err is error object
 *                              handaling error
 *                          }
 */
