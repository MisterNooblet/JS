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

const areaOrPerimeter = function (l, w) {
  if (l == w) {
    return l * w;
  } else {
    return l + w;
  }
};
