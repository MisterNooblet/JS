const myCountry = {
  country: "Finland",
  capital: "Helsinki",
  language: "Finnish",
  population: "6 million",
  neighbors: [3],

  describe() {
    console.log(
      `${this.country} has ${this.population}, their native language is ${this.language}, the have ${this.neighbors[0]} neighbouring countries and a capital called ${this.capital}`
    );
  },

  checkIsland() {
    this.neighbors[0] == 0 ? (this.isIsland = true) : (this.isIsland = false);
  },
};

myCountry.describe();
myCountry.checkIsland();
