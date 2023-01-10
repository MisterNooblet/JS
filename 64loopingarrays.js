const world = 7900;
const populations = [9, 50, 1144, 378];

function percentageOfWorld1(population) {
  percentage = ((population / world) * 100).toFixed(2);

  percentages.push(percentage);
}
function populationPercentages(arr) {
  percentages = [];
  for (i = 0; i < arr.length; i++) {
    percentageOfWorld1(populations[i]);
  }
  return percentages;
}

populationPercentages(populations);
