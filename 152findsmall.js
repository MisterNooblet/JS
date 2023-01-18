// 1. First, find the line that contains the problem. Write it down.

//the function call line had a typo 'findSmalest' which would obviously throw undefined

// 2. Which debug method did you use to find the bug?

//BP on the execution line

// 3. Explain the bug in your own words.

//the function call line had a typo 'findSmalest' which would obviously throw undefined
//also first condition makes no sense i fixed it

// 4. Fix the code and submit it all.

function findSmallest(a, b, c) {
  if (c > b > a) {
    return c;
  } else if (a > c > b) {
    return a;
  } else {
    return b;
  }
}
findSmallest(52, 66, 2); //typo
