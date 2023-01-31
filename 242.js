function Pokemon(pokemonName, pokemonType,
    pokemonAttackList) {
    this.name = pokemonName;
    this.type = pokemonType;
    this.attackList = pokemonAttackList;
}
Pokemon.prototype.callPokemon = function () {
    return `${this.name} i choose you!`;
}
Pokemon.prototype.attack = function (val) {
    return `${this.name} used ${this.attackList[val]}`
}
let squirtle = new Pokemon('Squirtle', 'Water', ['Water Puke', 'Fizzy Bubble Fart', 'Drown'])
let pikachu = new Pokemon('Pikachu', 'Electric', ['Fork in Outlet', 'Blow the fuse', 'Static hair styling'])
let homesquattero = new Pokemon('Home Squattero', 'Ground', ['Steal Food', 'Change locks', 'Hide in attic'])

console.log(squirtle);
console.log(pikachu);
console.log(homesquattero);

console.log(homesquattero.callPokemon());
console.log(pikachu.callPokemon());
console.log(squirtle.callPokemon());
console.log(squirtle.attack(1));
console.log(pikachu.attack(0));
console.log(homesquattero.attack(1));