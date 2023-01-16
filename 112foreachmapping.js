`use strict`;

const values = [32131, 54569, 87879, 45, 6897, 5565, 8888, 45785, 1001, 7088];
// 1. Write a function called doubleValues which accepts an
// array of integers and returns a new array with all the
// values in the array passed to the function doubled.
const double = values.map(function (n) {
  return n * 2;
});
console.log(double);
// 2. Write a function called onlyEvenValues which accepts an
// array and returns a new array with only the even values in
// the array passed to the function.
const onlyEvenValues1 = [];

function onlyEvenValues(values) {
  values.forEach(function (n) {
    if (n % 2 === 0) {
      onlyEvenValues1.push(n);
    }
  });
}
onlyEvenValues(values);
console.log(onlyEvenValues1);
// 3. Write a function called showFirstAndLast which accepts
// an array as an argument and returns a new array with only
// the first and last elements from the function’s argument
// array. The returned array should only contain elements
// that are strings.
const randomArray = [
  5464654,
  false,
  true,
  "wafrawfawf",
  null,
  "asfaesrwetgqwert",
  "string3",
  235234523,
  "laststring",
  5555,
];

const fal = [];

function showFirstAndLast(arr) {
  arr.forEach(function (val, idx) {
    if (typeof val === "string") {
      fal.push(val);
    } else if (idx == randomArray.length - 1) {
      fal.splice(1, fal.length - 2);
    }
  });
}

showFirstAndLast(randomArray);
console.log(fal);
// 4. Write a function called vowelCount which accepts a string
// as an argument. The function should return an object
// which has the count of the number of vowels that are in
// the string. The key should be the vowel and the value
// should be the count. e.g. {a:3, o:2,u:4}. Should not be
// case-sensitive.
const str =
  "Aowlfpkaewoifjipogfjqpofgkeklfpobhjko[gfkeqp[ofkewpogbop[gkop[qegkfewpogjpsjmbnispovnouijjfnipqajfiwengbobmfboiswekmgpoeqfgk";

let vowels = {};

function vowelCount(string) {
  [...string.toLowerCase()].forEach(function (char) {
    if (
      char == "o" ||
      char == "u" ||
      char == "i" ||
      char == "e" ||
      char == "a"
    ) {
      vowels[char] = 0;
    }
  });
  [...string.toLowerCase()].forEach(function (char) {
    if (
      char == "o" ||
      char == "u" ||
      char == "i" ||
      char == "e" ||
      char == "a"
    ) {
      vowels[char] += 1;
    }
  });
}
vowelCount(str);
console.log(vowels);
// 5. Write a function capitalize that takes a string as an
// argument and will return the whole string capitalized.

function capitalize(str) {
  let upper = "";
  [...str.toUpperCase()].forEach(function (char) {
    upper += char;
  });
  console.log(upper);
  return upper;
}
capitalize("fasgfasgagasgasgasgfw");
// 6. Write a function called shiftLetters that takes a string as an
// argument and return’s an encoded string with each letter
// shifted down the alphabet by one.

let encoded = [];
let encodedStr = "";
function shiftLetters(str) {
  [...str].map(function (char) {
    encoded.push(char.charCodeAt(0) - 1);
  });
  encoded.forEach(function (code) {
    encodedStr += String.fromCharCode(code);
  });
  console.log(encodedStr);
}
shiftLetters("howdy there man");
// 7. Create a function called swapCase that takes a string as
// an argument and returns a string that every other word is
// capitalized. (you can use the fifth’s exercise's function to
// keep it dry)

function swapCase(str) {
  let uppercased = "";
  let uppers = str.split(" ");
  uppers.forEach(function (char) {
    uppercased += char[0].toUpperCase() + char.slice(1, char.length) + " ";
  });
  console.log(uppercased);
}
swapCase("fasgfas gagasgasg asgfw");
