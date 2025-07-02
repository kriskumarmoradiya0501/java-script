//object & classes

/**
 * Prorotypes in JS :
 *                  A java script object is an entity having state and behaviour(properties and method).
 *                  JS objects have a special property called prototype.
 *                  We can set prototype using__ptoto__
 *              note: If object & prototype have same method,
 *                    objects methods will be used.
 */

const student = {
    fullName : "kriskumar hiteshbhai moradiya",
    marks : 94.4,
    printMarks : function(){
        console.log(this.marks);
    }
};


console.log(student.fullName);
console.log(student.marks);
student.printMarks();

const employee = {
    calcTax(salary) {
        console.log("Tax Rate is 10%");
        console.log(salary * 0.1);
    }
}

console.log(employee.calcTax());

const karanArjun={
    salary : 50000,
    calcTax : function(){
        console.log("Tax Rate is 20%");
        console.log(this.salary * 0.2);
    }
}

karanArjun.__proto__=employee;

console.log(karanArjun.salary);
console.log(karanArjun.calcTax(karanArjun.salary));

/**
 * Classes in JS : 
 *              Class is a program code template for creating objects.
 *              Those objects will have some state (variables) & some behavier (funstions) inside it.
 * 
 *      Class MyClass{
 *          constroctor(){...}
 *          myMethod(){...}
 *      }
 *      
 *      let myObj = new MyClass(); 
 */

class ToyotaCar{
    constructor(){
        console.log("constructor");
    }

    start(){
        console.log("start");
    }

    stop(){
        console.log("stop");
    }
    setBrand(brand){
        console.log(brand);
    }
}

let ToyotaCarObj = new ToyotaCar();
ToyotaCarObj.start();
ToyotaCarObj.stop();
ToyotaCarObj.setBrand("Toyota");

/**
 * Constructor() method is :
 *                  Automatically invoked buy new
 *                  initializes object  
 * class MyClass{
 *      constructor(){...}
 *      myMethod(){...}
 * }
 */

/**
 * Inheritance in JS:
 *                  inheritance is passing down properties & methods from parent class to child class.
 * class Parent{
 * 
 * }
 * class Child extends Parent{
 * 
 * }
 * 
 * Note : if child & Parent have same method child's method will be used.[Method Overriding0]
 */

class Parent{
    hello(){
        console.log("hello");
    }
}

class Child extends Parent{

}

let childObj = new Child();
childObj.hello();


class Person{
    constructor(name){
        this.name = name;
        console.log(this.name);
    }
    eat() {
        console.log("eat");
    }

    sleep() {
        console.log("sleep");
    }

}

class Student extends Person{
    work() {
        console.log("study");
    }
}

class Engineer extends Person{
    constructor(name){
        super(name);
    }
    code() {
        console.log("code");
    }
    sleep() {
        console.log(" child sleep");
    }
}

let studentObj = new Student();
studentObj.eat();
studentObj.sleep();
studentObj.work();

let engineerObj = new Engineer("johan");
engineerObj.eat();
engineerObj.sleep();
engineerObj.code();




