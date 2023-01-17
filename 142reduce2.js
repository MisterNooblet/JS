// Write the following functions using the reduce built-in function.

// 1. Write a function called extractOnlyValue which accepts an
// array of objects and a key and returns a new array with
// the value of each object at the key

let fruits = [
  {
    item: "banana",
    price: 4.5,
  },
  {
    item: "peach",
    price: 3.5,
  },
  {
    item: "apple",
    price: 2,
  },
  {
    item: "pineapple",
    price: 2,
  },
  {
    item: "orange",
    price: 3.2,
  },
];

function extractOnlyValue(array, key) {
  const result = array.reduce((a, b) => {
    a.push(b[key]);
    return a;
  }, []);
  console.log(result);
}
extractOnlyValue(fruits, "item");

// 2. Write a function called countOnlyVowels which accepts a
// string and returns an object with the keys as the vowel and
// the values as the number of times the vowel appears in
// the string. This function should be case insensitive so a
// lowercase and uppercase letter should count

function vowels(string) {
  const result = [...string].reduce((a, val) => {
    if (/[aeiouAEIOU]/.test(val) && a[val]) {
      a[val]++;
    } else if (/[aeiouAEIOU]/.test(val)) {
      a[val] = 1;
    }
    return a;
  }, {});
  console.log(result);
}
vowels("heSEEEEEEEEEEElloo");

// 3. Write a function called addKeyAndValue which accepts 3
// parameters an array of objects, key, and value, and
// returns the array of objects passed to it. with each object
// now including the key and value passed to the function

function addKeyAndValue(arr, key, val) {
  const result = arr.reduce((acc, fruit, i) => {
    const inject = Object.assign(fruit, { [key]: val });
    acc.push(inject);
    return acc;
  }, []);
  console.log(result);
}
addKeyAndValue(fruits, "forSale", "yes");
// addKeyAndValue(fruits, "forSale", "yes");
