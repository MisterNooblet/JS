let israel = ["Hebrew", false, 9000000, "Israel"];
let jamaica = ["English", true, 2700000, "Jamaica"];
let canada = ["English", false, 39000000, "Canada"];

let countries = [israel, jamaica, canada];

function pickCountry() {
  let pick = countries[Math.floor(Math.random() * countries.length)]; // picks random country from countries array
  countries.indexOf(pick) > -1 && countries.splice(countries.indexOf(pick), 1); //removes that country from countries array..

  countryToLiveIn(pick[0], pick[1], pick[2], pick[3]);
}

function countryToLiveIn(language, isIsland, population, country) {
  if (language == "English" && population < 50000000 && isIsland == false) {
    console.log(`You should live in ${country}`); //found a country and ends execution
  } else {
    console.log(`${country} does not meet your criteria.`);
    pickCountry(); // country did not meet our criteria , picking a new one..
  }
}

pickCountry();
