// Write a function called ‘isString’ that receives 2 arguments,
// a string and a callback function. The function checks that
// the string is indeed a string. If the string is a string, pass
// the string to a callback function that logs that string to the
// console.
function log(string) {
  console.log(string);
}

const func = function (x) {
  if (typeof x == "string") {
    log(x);
  }
};

function isString(x, func) {
  func(x);
}

isString("howdy", func);
// 2. Create a function called ‘firstWordUpperCase’ that
// receives 2 arguments, a string and a callback function.
// The function will capitalize the first word in the sentence
// and pass the string to a callback function which will create
// dashes between the words.
let newstring = "";
let tempstring = [];
let action = function (str) {
  tempstring = str.split(" ");
  for (let i = 0; i < tempstring.length; i++) {
    if (i == 0) {
      for (let x = 0; x < tempstring[i].length; x++) {
        console.log("txt");
        newstring += tempstring[i][x].toUpperCase();
      }
    } else {
      newstring += tempstring[i];
    }
    newstring += " ";
  }
  newstring = newstring.substring(0, newstring.length - 1);
  replaceToDashes(newstring);
};

function firstWordUpperCase(str, action) {
  action(str);
}

function replaceToDashes(str) {
  let dashed = newstring.replaceAll(" ", "-");
  console.log(dashed);
}

// 3. Call the ‘firstWordUpperCase’ function with a callback of
// your choice.

firstWordUpperCase("howdy there stranger", action);
// 4. Create your own function that will receive from one of its
// arguments a callback function.
let odd = function (num) {
  num % 2 == 0
    ? console.log(`${num} is even!`)
    : console.log(`${num} is indeed odd!`);
};

function testNum(num, func) {
  func(num);
}
