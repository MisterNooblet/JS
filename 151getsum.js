// # Note: We ask you not to solve the bug by finding it with
// your eyes but to use the debugging tools we've learned!
// What is wrong with this code?
// 1. First, find the line that contains the problem. Write it down.
//line 19 was bad because the arrays were not separated with a comma , also arr2 had parenthesis inside the array.
// later on after fixing line 19 i have encountered another error sum was a constant variable which can not be manipulated so i changed it to let.

// 2. Which debug method did you use to find the bug?
//i have put a breakpoint on the line of the function call to dive into the whole function execution and analyzing the values behavior.

// 3. Explain the bug in your own words.

//function was called wrongfully as explained above and below at line 19
// also function tried to change a constant variable which ofcourse threw an error.

// 4. Fix the code and submit it all.

//fixed

function getSum(arr1, arr2) {
  let sum = 0; // later on after fixing line 19 i have encountered another error sum was a constant variable which can not be manipulated so i changed it to let.
  for (let i = 0; i < arr1.length; i++) {
    sum += arr1[i];
  }
  for (let i = 0; i < arr2.length; i++) {
    sum += arr2[i];
  }
}
getSum([1, 2, 3], [5, 66, 23]); //line 19 was bad because the arrays were not separated with a comma , also arr2 had parenthesis inside the array.
