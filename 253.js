// Front - end development
// JavaScript – heroes
// The following exercise contains the following subjects:
// ● bind, call, apply
// Instructions
// We have an array of superheroes objects:
const wonderWoman = {
    name: "Diana Prince"
}
const batman = {
    name: "Bruce Wayne"
}
const superHeroes = [wonderWoman, batman];


// and a print name function:


function printName() {
    console.log(`my name is ${this.name}`);
}


// We want to print the all heroes names.Implement the
// printHeroes function:
//     Note: you cannot change the super heroes objects



function printHeroes(heroes, printFunc) {
    heroes.forEach(element => {
        printFunc.call(element)
    })
}

printHeroes(superHeroes, printName)