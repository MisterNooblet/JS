let words = ["Encyclopedia", "Tractor", "Plumbus"];
countLetters(words);
function countLetters(arr) {
  let count = [];
  for (let i = 0; i < arr.length; i++) {
    count.push(words[i].length);
  }
  return count;
}
