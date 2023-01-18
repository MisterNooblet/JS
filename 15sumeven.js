// What is wrong with this code?
// 1. First, find the line that contains the problem. Write it down.
//line that returns had arr[10] as an arguement which is bad because our given arrays highest index is 9
//on the second iteration i discovered that all arguements had the wrong index and fixed it accordingly
// 2. Which debug method did you use to find the bug?
//breakpoint on function call and hovering my mouse over every return value untill reaching arr[10] which was undefined
// 3. Explain the bug in your own words.
//line that returns had arr[10] as an arguement which is bad because our given arrays highest index is 9
//on the second iteration i discovered that all arguements had the wrong index and fixed it accordingly
// 4. Fix the code and submit it all.

function getSumOfEven(arr) {
  return arr[1] + arr[3] + arr[5] + arr[7] + arr[9];
}
getSumOfEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
