// What is wrong with this code?
// 1. First, find the line that contains the problem. Write it down.
//the bug is on line 14 , variable cant be manipulated with only one plus operator instead it should be var++ or var += since were adding just one number at a time ++ with suffice
// 2. Which debug method did you use to find the bug?
//breakpoints while watching changes in values
// 3. Explain the bug in your own words.
////the bug is on line 14 , variable cant be manipulated with only one plus operator instead it should be var++ or var += since were adding just one number at a time ++ with suffice
// 4. Fix the code and submit it all.

function countOccurrences(str, char) {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === char) {
      counter++;
    }
  }
  return counter;
}
countOccurrences("ini mini miny moe", "n");
