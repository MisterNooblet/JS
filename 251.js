// 1. What is wrong with the code ? explain in your own words

//getStrength is being called from another function meaning it is unbound to its parent object and the *this* keyword loses focus from the hero obj
//thats why we need to call it bound to the object when were setting it as and arguemenet on whoIsstronger func call

// 2. Fix the code so that invoking the whoIsStronger function
//     will print "I am stronger".
//         note: you cannot change the 'hero' or the whoIsStronger
// function.
const hero = {
    health: 5,
    power: 68,
    getStrength: function () {
        if (this.health <= 5) {
            return this.power - 10;
        } else return this.power;
    }
}
function whoIsStronger(getStrength) {
    const myStrength = 82;
    if (getStrength() < myStrength) {
        return "I am stronger";
    } else return "You are stronger";
}
whoIsStronger(hero.getStrength);


whoIsStronger(hero.getStrength.bind(hero));//this is the fix to the issue!!!