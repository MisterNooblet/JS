// function isValid(password, username) {
//   if (
//     password.indexOf(username) === -1 &&
//     password.indexOf(" ") === -1 &&
//     password.length >= 8
//   ) {
//     console.log(password.indexOf(username));
//     console.log(password.indexOf(" "));
//     return true;
//   } else {
//     return false;
//   }
// }
// let sum = 0;

// function avg(arr) {
//   sum = 0;
//   for (let i = 0; i <= arr.length - 1; i++) {
//     sum += arr[i];
//   }
//   let avg = sum / arr.length;
//   return avg;
// }

// function squareSum(numbers) {
//   let sum = 0;
//   for (i = 0; i < numbers.length; i++) {
//     sum += numbers[i] * numbers[i];
//   }
//   console.log(sum);
//   return sum;
// }

// function countBy(x, n) {
//   let z = [];
//   let i = x;
//   for (i; i < x * n + 1; i += x * x) {
//     z.push(i);
//     console.log(z);
//   }
//   console.log(i);
//   console.log(z);

//   return z;
// }

// function countBy(2, 5) {
//   let z = [];
//   let i = x;
//   for (2i; i < x * n + 1; i += x * x) {
//     z.push(i);
//     console.log(z);
//   }
//   console.log(i);
//   console.log(z);

//   return z;
// }

// String.slice

// function noSpace(x) {
//   z = x.replaceAll(" ", "");
//   return z;
// }
// function points(games) {
//   let score = 0;
//   for (i = 0; i < games.length; i++) {
//     let x = games[i];

//     if (x[0] > x[2]) {
//       score += 3;
//       console.log(y);
//       console.log(z);
//       console.log(score);
//     }
//     if (x[0] == x[2]) {
//       score++;
//       console.log(y);
//       console.log(z);
//       console.log(score);
//     }
//   }
//   return score;
// }

// function bmi(weight, height) {
//   let calc = weight / (height ^ 2);

//   if (calc <= 18.5) {
//     return "Underweight";
//   } else if (calc <= 25) {
//     return "Normal";
//   } else if (calc <= 30) {
//     return "Overweight";
//   } else {
//     return "Obese";
//   }
// }

// const areaOrPerimeter = function (l, w) {
//   if (l == w) {
//     return l * w;
//   } else {
//     return l + w;
//   }
// };
// function expandedForm(num) {
//   let solution = num.toString();
//   let string = "";
//   let numsToEnd = 0;
//   for (let i = 0; i < solution.length; i++) {
//     if (solution[i] > 0) {
//       string += solution[i];
//       console.log(string);
//       numsToEnd = solution.length - solution[i];
//       for (numsToEnd; numsToEnd >= 1; numsToEnd--) {
//         if (numsToEnd > 0) {
//           string += "0";
//         } else {
//           string += ` + `;
//         }
//       }
//     }
//   }

//   return string;
// }

// let arr = [1, 1, 1, 1, 2, 1, 1, 1];
// arrangetemps(arr);
// function arrangetemps(arr) {
//   let temp1 = [];
//   let temp2 = [];
//   temp1.push(arr[1]);
//   for (const i of arr) {
//     if (temp1.includes(i) == true) {
//       temp1.push(i);
//     } else {
//       temp2.push(i);
//     }
//   }
//   if (temp1.length < temp2.length) {
//     console.log(temp1[0]);
//     return temp1[0];
//   } else {
//     console.log(temp2[0]);
//     return temp2[0];
//   }
// }

// let input = [
//   [18, 20],
//   [45, 2],
//   [61, 12],
//   [37, 6],
//   [21, 21],
//   [78, 9],
// ];

// output = [];
// shit(input);
// function shit(arr) {
//   for (const i of arr) {
//     if (i[0] >= 55 && i[1] > 7) {
//       output.push("Senior");
//     } else {
//       output.push("Open");
//     }
//   }
// }
// let friends = ["Ryan", "Kieran", "Mark"];

// function friend(friends){
//   let myfriends = []
//   for (const i of friends) {
//     if(i.length == 4){
// myfriends.push(i)
//     }
//   }
//   return myfriends;
// }

// let i = 1;
// let x = 1;
// i == x && console.log(true);
// function descendingOrder(n) {
//   let result = [];
//   for (const i of [...n.toString()]) {
//     result.unshift(i);
//   }
//   console.log(result.join(""));
//   return result.join("");
// }
// descendingOrder(2132);

// simpleMultiplication(555);

// function simpleMultiplication(number) {
//   return number % 2 == 0 ? number * 8 : number * 9;
// }
// array.forEach(element => {

// });

// function isValidWalk(walk) {
//   let result = Array.from(walk);
//   if (result.length == 10) {
//     let test = result.reduce((acc, dir) => {
//       if (acc[dir]) {
//         acc[dir]++;
//       } else {
//         acc[dir] = 1;
//       }
//       return acc;
//     }, {});

//     if (
//       test.n &&
//       test.s &&
//       test.n == test.s &&
//       test.w &&
//       test.e &&
//       test.w == test.e
//     ) {
//       return true;
//     } else if (test.w && test.e && test.w == test.e) {
//       return true;
//     } else if (test.n && test.s && test.n == test.s) {
//       return true;
//     }
//   }
//   return false;
// }
// isValidWalk(["n", "n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]);

// doTest([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]);

// array.forEach((element) => {});


let array = [1, 2, 5, 4, 3, 2, 3, 6, 4, 1, 2, 3, 3, 4, 5, 3, 2, 1, 2, 3, 5, 5, 4, 3] //{pos:[2,7,14,20], peaks:[5,6,5,5]});

// function loopIt(arr) {
//     let plateuNum = 0;
//     let plateuIndex = 0;

//     for(let i = 1; i < arr.length - 1; i++){
//         if ( arr[i] > arr[(i-1)] && arr[i] === arr[i+1]) {
//             plateuNum = arr[i];
//             plateuIndex = i;
//             for (let x = i; x < arr.length ; x++){
//                 if(arr[x] === arr[x-1]&&arr[x] > arr[x+1]){
//                     console.log('x',arr[x] , x);
//                     break;
//                 }
//             }
//         }else if (arr[i] > arr[i+1] && arr[i] > arr[i-1]) {
//             console.log(arr[i] , i);

//         }
//     }
// }

// loopIt(arr);
// const myForEach = (arr, cb) => {
//     for(let i = 0; i < arr.length; i++){
//         const output = arr[i]
//         cb(output)
//     }
// }
// myForEach(array, (item) =>{
//     console.log(item);
// })

// const myFilter = (arr , cb) =>{
//     for (let i = 0; i < arr.length; i++) {
//         const output = arr[i]
//         cb(output)

//     }
// }

// myFilter(array , (item) =>{
//     item > 5 && console.log(item);
// })
// const numbers = [1, 2, 3, 4, 5];

// // --------------

// Array.prototype.forEachLoop = function(callback) {
//     for (let i = 0; i < this.length; i++) {
//         callback(this[i], i, this);
//     }
//   };

// // forEach
// numbers.forEachLoop((number , idx ,arr) => {
//     console.log(number ,idx,arr);
//   });


//   Array.prototype.mapLoop = function(callback) {
//     const newArr = [];
//     for (let i = 0; i < this.length; i++) {
//       newArr.push(callback(this[i], i, this));
//     }
//     return newArr;
//   };

//   // map
//   debugger;
// const double = numbers.mapLoop((number) => {
//      return number * 2;
//   });
//   console.log(double);
//   // 

//   Array.prototype.filterLoop = function(callback) {
//     const newArr = [];
//     for (let i = 0; i < this.length; i++) {
//       if (callback(this[i], i, this)) {
//         newArr.push(this[i]);
//       }
//     }
//     return newArr;
//   };
// // filter
// const even = numbers.filterLoop((number) => {
//     return number % 2 === 0;
//   });
//   console.log(even)



// // forEach
// numbers.forEachLoop((number) => {
//   console.log(number);
// });



// Array.prototype.forEachLoop = function(callback) {
//     for (let i = 0; i < this.length; i++) {
//      return callback(this[i], i, this);
//     }
//   };

// // forEach
// numbers.forEachLoop((number) => {
//     console.log(number);
// });


//   Array.prototype.mapLoop = function(callback) {
//     const newArr = [];
//     for (let i = 0; i < this.length; i++) {
//       newArr.push(callback(this[i], i, this));
//     }
//     return newArr;
//   };



//   Array.prototype.filterLoop = function(callback) {
//     const newArr = [];
//     for (let i = 0; i < this.length; i++) {
//       if (callback(this[i], i, this)) {
//         newArr.push(this[i]);
//       }
//     }
//     return newArr;
//   };

let people = [
  { name: "Jane Doe", age: 30 },
  { name: "John Doe", age: 33 },
  { name: "Mike Doe", age: 31 },
  { name: "Tom Doe", age: 35 },
  { name: "Danny Doe", age: 37 }
]

let myForIn = function (obj, callback) {
  for (let i = 0; i < obj.length; i++) {
    const element = obj[i];
    callback(element)

  }
}

myForIn(people, (el) => {
  console.log(el.name);
})

Array.prototype.myFind = function (callback) {
  let result;
  for (let i = 0; i < this.length; i++) {
    const element = this[i];
    let isFound = callback(element)
    if (isFound) {
      result = element;
      break;
    }
  }
  return result
}

numberz = [2, 6, 5, 4, 3, 99];

numberz.myFind(el => el > 10);
console.log(numberz.myFind(el => el == 5));
