// Front - end development
// JavaScript – fundamentals of this
// The following exercise contains the following subjects:
// ● context
// Instructions
// Answer the following questions:
// Question 1:
// In your own words what will this point to and why ?
//     (Note this is the global scope)
console.log(this);

//This will call the window/global object cause were reffering it from the global scope.....


// Question 2:
// a.In your own words what will this point to and why ?

//this will point out of the object and to the global scope 
//because the way arrow functions treat this

//     b.How can you fix this code ?

//change it from an arrow function to a funnctionn declaration this will fix the issue
//and make the this keyword point to its parent object
const myObj = {
    name: "Timmy",
    greet: () => {
        console.log(`Hello ${this.name}`);
    },
};
myObj.greet();
// Question 3:
// In your own words what will this point to and why ?

//it will refer to the global object because its a function expression in a variable on the global
const myFuncDec = function () {
    console.log(this);
};


// Question 4:
// In your own words what will this point to and why ?

//it will point to the window because its in a variable on the global scope.
const myFuncArrow = () => {
    console.log(this);
};
myFuncArrow();
// Question 5:
// // a.In your own words, what will this point to and why ?
//first of all this will not execute because we didnt specify and event to listen to,
//but.. if we do.. this will refer to the global scope because its an arrow function
//we need to change it to a regular function expression to reffer 'this' to the element


//     b.How can you fix this code ?
document.querySelector(".element").addEventListener(() => {
    console.log(this);
});