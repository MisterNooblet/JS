// Front-end development: Tricky Parts
// JavaScript – scope & hoisting
// The following exercise contains the following subjects:
// ● scope
// ● hoisting
// Instructions
// Without running the code below, explain in your own words
// what the result of each block of code will be and why.
// If there are any faulty outputs, please write on how we can fix
// them.
// Block 1
// function funcA() {
//   console.log(a); //will throw undefined
//   console.log(foo()); // will return 2
//   var a = 1;
//   function foo() {
//     return 2;
//   }
// }
// funcA();

// Block 2
var fullName = "John Doe";
var obj = {
  fullName: "Colin Ihrig",
  prop: {
    fullName: "Aurelio De Rosa",
    getFullName: function () {
      return this.fullName;
    },
  },
};
console.log(obj.prop.getFullName()); //will return"Aurelio De Rosa"
let test = obj.prop.getFullName;
console.log(test()); //will return"Aurelio De Rosa"

// Block 3
function funcB() {
  let a = (b = 0);
  a++;
  return a;
}
funcB();
console.log(typeof a); //cannot access will return undefined
console.log(typeof b); //number

// Block 4
function funcC() {
  console.log("1");
}
funcC(); //will log 2
function funcC() {
  console.log("2");
}
funcC(); //will log 2

// Block 5
function funcD1() {
  d = 1;
}
funcD1();
console.log(d); //will return 1
function funcD2() {
  var e = 1;
}
funcD2();
console.log(e); // error

// Block 6
function funcE() {
  console.log("Value of f in local scope: ", f); //1
}
console.log("Value of f in global scope: ", f); //undefined
var f = 1;
funcE();
