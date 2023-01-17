let values = [565, 8787, 56454, 1, 65, 88, 99, 7878, 0, -1, -345, 888];
//MaxValue
const largest = values.reduce((a, b) => {
  if (a < b) {
    a = b;
  }
  return a;
});

console.log(largest);
//SumEven
const sumEven = function () {
  let onlyEven = values.filter((num) => num % 2 === 0);
  let result = onlyEven.reduce((a, b) => a + b);
  console.log(result);
};

sumEven();
//Average
let avgTemp = 0;
const avg =
  values.reduce((a, b) => {
    return a + b;
  }) / values.length;
console.log(avg);
