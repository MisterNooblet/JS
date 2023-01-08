let Result1 = null;
let Result2 = null;
let Result3 = null;

function countryInfo(country, population, capitalCity, target) {
  switch (target) {
    case 1:
      Result1 = `${country} has ${population} people and its capital city is ${capitalCity}`;
      break;

    case 2:
      Result2 = `${country} has ${population} people and its capital city is ${capitalCity}`;
      break;
    case 3:
      Result3 = `${country} has ${population} people and its capital city is ${capitalCity}`;
      break;
  }
}

countryInfo("Spain", "47 Million", "Madrid", 1);
countryInfo("Israel", "9.61 Million", "Jerusalem", 2);
countryInfo("Zimbabwe", "15 Million", "Harare", 3);

console.log(Result1);
console.log(Result2);
console.log(Result3);
