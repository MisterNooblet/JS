const world = 7900;
let percentage = null;

function percentageOfWorld1(population, country) {
  percentage = `${country} has ${population}million people which is ${(
    (population / world) *
    100
  ).toFixed(2)}% of the world;`;

  return percentage;
}

console.log(percentageOfWorld1(1441, "China"));
console.log(percentageOfWorld1(97.5, "Vietnam"));
console.log(percentageOfWorld1(9, "Israel"));

const percentageOfWorld2 = function (population, country) {
  percentage = `${country} has ${population}million people which is ${(
    (population / world) *
    100
  ).toFixed(2)}% of the world;`;

  return percentage;
};

console.log(percentageOfWorld2(109.3, "Egypt"));
console.log(percentageOfWorld2(5.033, "Ireland"));
console.log(percentageOfWorld2(1408, "India"));
