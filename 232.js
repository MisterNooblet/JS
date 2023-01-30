// Front - end development
// JavaScript – super powers
// The following exercise contains the following subjects:
// ● context
// Instructions
// Your Task: Edit the storm object.Invoke the printSuperPower
// function using the storm object as the context of the function.
// So your output should be: my superpower is flying.
//     Well, Storm also controls the weather, so, whatever you
// choose!
// You cannot change the printSuperPower function



const storm = {
    superPower: 'having no super powers at all'


}
function printSuperPower() {
    console.log("my superpower is " +
        this.superPower);
}

printSuperPower.call(storm)