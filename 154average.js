// What is wrong with this code?
// 1. First find the line that contains the problem. Write it down.

//sum was only declared at line 12 but never had a value , therefore the loop could not add values to it.

// 2. Which debug method did you use to find the bug?

//breakpoints

// 3. Explain the bug in your own words.

//sum was only declared at line 12 but never had a value , therefore the loop could not add values to it.
// 4. Fix the code and submit it all.

function calcAverage(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
calcAverage([85, 90, 92]);
