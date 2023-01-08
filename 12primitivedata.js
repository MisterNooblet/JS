/*--Delete the wrong answers--
1. Which of the following is/are strings?
c) '4'
2. Which of the following is/are numbers?
a) 4
b) 4.0
d) -4
3. Which of the following is/are booleans?
a) true
b) false
4. What is the result of 80 + 71.2?
a) 151.2
5. What is the result of "80" + 71.2?
c) "8071.2"
6. Does 100 + 30 produce a number or a string?
a) number
7. Does "100" + 30 produce a number or a string?
b)string
*/

// //------Submit your answers under the
// question------//
// //create three different ways to declare variables

let one = 1;
var two = "2";
const three = 3.0;

// //declare a variable and reassign a value to it

let reassignval = 55;

reassign(5);
function reassign(value) {
  reassignval += value;
  console.log(reassignval);
}

// //create a variable and after that assign a string
// with its value being: He's got it!
// /*

let reassignval2 = null;

reassign2("He's got it!");
function reassign2(value) {
  reassignval2 = value;
  console.log(reassignval2);
}

// 1. create a variable and assign a value on how
// much a restaurant bill is.

const bill = 200;

// 2. create a variable and assign a value on how
// much tax they should pay.

let tax = bill * 0.17;

// 3. create a variable that will calculate the bill
// * tax and its output would be: Your total bill is
// <total bill> $.

let cheque = bill + tax;

// Round the number 50.6 to its nearest integer

let roundme = Math.round(50.6);

//Create a variable that is undefined

var undef = undefined;
