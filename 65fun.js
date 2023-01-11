// 1. Fill an array with 100 of the same object using the array fill
// method.
const arr = [];
arr.length = 100;
arr.fill(1, 0);
console.log(arr);
// 2. Create an array with numbers ranging from 1-100 using
// the Array.from method.
const hundred = Array.from({ length: 100 }, (xyz, i) => 1 + i);
console.log(hundred);
// 3. Convert only values of an object into one array.
const person = {
  firstName: "Artyom",
  lastName: "Ribakov",
  age: "31",
};

const valuesArray = Object.values(person);
console.log(valuesArray);
// 4. Convert an array into one object.

const objfromarray = { ...valuesArray };
console.log(objfromarray);
// 5. Find out if an array is an array.
const isArray = Array.isArray(valuesArray);
console.log(`valuesArray is array? ${isArray}`);

// 6. Copy an array.
// ● Create a copy of an array that won’t affect the
// original array if modified.

let newArray = valuesArray;
console.log(newArray);
// ● Create a copy of an array that will affect the original
// array if modified.
let modifiable = valuesArray.slice();
